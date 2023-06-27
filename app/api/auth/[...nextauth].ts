import prisma from "@/app/libs/prismadb";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { AuthOptions } from "next-auth";

export const authOptions: AuthOptions={
    adapter:PrismaAdapter(prisma),
    providers:[
        GithubProvider({
            clientId
        })
    ]

}