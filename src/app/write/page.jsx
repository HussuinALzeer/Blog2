"use client"
import React, { useEffect, useState } from 'react'
import styles from './write.module.css'
import Image from 'next/image'
import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
  } from "firebase/storage";import {app} from '../../utils/firebase'

import {useSession} from 'next-auth/react'

// 
import "react-quill/dist/quill.bubble.css"
import { useRouter } from 'next/navigation'

import {motion} from 'framer-motion'
import dynamic from 'next/dynamic';

const storage = getStorage(app);

const WritePage = () => {

    const  ReactQuill =dynamic(() => import('react-quill') , {ssr:false} )


    const [open, setOpen] = useState(false)
    const [file, setFile] = useState(null)
    const [media, setMedia] = useState('')
    const [value, setValue] = useState("")
    const [title, setTitle] = useState('')
    const [catagory, setCatagory] = useState('')
    const [catSlug, setCatSlug] = useState("");

    const {data ,status}  = useSession()

    const router = useRouter()


    useEffect(() => {


        const upload = () => {
          const name = new Date().getTime() + file.name;
          const storageRef = ref(storage, name);
    
          const uploadTask = uploadBytesResumable(storageRef, file);
    
          uploadTask.on(
            "state_changed",
            (snapshot) => {
              const progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              console.log("Upload is " + progress + "% done");
              switch (snapshot.state) {
                case "paused":
                  console.log("Upload is paused");
                  break;
                case "running":
                  console.log("Upload is running");
                  
                  break;
              }
            },
            (error) => {},
            () => {
              getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                setMedia(downloadURL);
                console.log(media);
              });
            }
          );
        };
    
        file && upload();
      }, [file]);
    

    if(status === "loading"){
        return <div className={styles.loading}>Loading</div>
      }
    
      if(status === "unauthenticated"){
        router.push('/')
      }

   
       

    const slugify = (str) =>{
        str
          .toLowerCase()
          .trim()
          .replace(/[^\w\s-]/g,"")
          .replace(/^-+|-+/g,"")
          .replace(/[\s\_-]+/g,"_")
    }

    const handelsubmit = async () =>{
        const res = await fetch("/api/posts",{
            method:"POST",
            body: JSON.stringify({
                title,
                desc:value,
                img:media,
                slug:slugify(title),
                catSlug:catagory

            })
        })
        console.log(res);
        if (res.status === 200) {
          const data = await res.json();
          router.push(`/posts/${data.slug}`);
        }
    }

    const variants = {
      hidden:{ opacity:0},
      visible : { opacity:1}
  }

  return (
    < motion.div
    variants={variants}
    initial="hidden"
    animate="visible"
    transition={{
        ease:"easeInOut",
        duration:0.5
    }}
    exit={{opacity:0}}    
    className={styles.container}>
        <input type="text" placeholder='Title' className={styles.input} onChange={e => setTitle(e.target.value)} />
        <input type="text" placeholder='catagory' className={styles.input} onChange={e => setCatagory(e.target.value)} />

        <div className={styles.editor}>
            <button className={styles.btn} onClick={() => setOpen(!open)} >
                
                    <Image src='/sign.png' alt='' width={20} height={20} />
                
            </button>

            {open && 
            
            <div className={styles.add}>
                <input type="file" id='image' onChange={e => setFile(e.target.files[0])} style={{display:"none" ,}} />
                
                <button className={styles.Addbtn}>
                    <label htmlFor="image">
                        <Image src='/picture.png' alt='' width={16} height={16} />
                    </label>
                </button>
                <button className={styles.Addbtn}>
                    <Image src='/maximize.png' alt='' width={16} height={16} />
                </button>
                <button className={styles.Addbtn}>
                    <Image src='/video.png' alt='' width={16} height={16} />
                </button>

            </div>
                
            }

<ReactQuill
          className={styles.textArea}
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your story..."
        />        </div>

        <button className={styles.publish} onClick={ handelsubmit} >Publish</button>    
    
    </ motion.div>
  )
}

export default WritePage