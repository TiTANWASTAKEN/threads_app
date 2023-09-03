
"use client"
import{ useUploadThing } from "@/lib/uploadthing";
import{Form} from "@/components/ui/form";
import{useForm} from "react-hook-form";
import{zodResolver} from "@hookform/resolvers/zod";
import { UserValidation } from "@/lib/validations/user";
import { Button } from "@/components/ui/button"
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import * as z from "zod";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import { Textarea } from "../ui/textarea";
import { isBase64Image } from "@/lib/utils";
import { updateUser } from "@/lib/actions/user.actions";
import { usePathname, useRouter } from "next/navigation";
interface Props{
    user:{
        id:string;
        objectId:string;
        name:string;
        username:string;
        bio:string;
        image:string;
    };
    btnTitle: string;
}

const AccountProfile = ({user, btnTitle}:
    Props) => {
      const[files, setFiles] = useState<File[]>([])
      const{startUpload} = useUploadThing("media");
      const router = useRouter();
      const pathname = usePathname();
        const form = useForm({
            resolver: zodResolver(UserValidation),
            defaultValues:{
                profile_photo:user?.image ||"",
                name:user?.name ||"",
                username:user?.username ||"",
                bio:user?.bio ||"",
            },
        })

function PostThread({userId}:{userId: string}){
    return <h1>Post Thread Form</h1>
}
export default PostThread;