import { z } from "zod"; 

export const signUpSchema = z.object({
    email: z.string().min(1, {message: "Email is required"}).email({ message: "Invalid email address" }),
    password: z.string().min(4, { message: "Password must be 4 characters long" })
})

export const loginSchema = z.object({
    email: z.string().min(1, {message: "Email is required"}).email({ message: "Invalid email address" }),
    password: z.string().min(4, { message: "Password must be 4 characters long" })
})