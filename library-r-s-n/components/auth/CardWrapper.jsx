"use client"

import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/CardComponents"
import { Header } from "@/components/auth/Header"
import { Social } from "@/components/auth/Social"
import { Redirect } from "./Redirect"

export default function CardWrapper({ children, headerTitle, headerLabel, redirectButtonLabel, redirectButtonHref, showSocial })
{
    return (
        <Card className="w-[400px]">
            <CardHeader>
                <Header title={headerTitle}label={headerLabel}/>
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
            {showSocial && (
                <CardFooter>
                    <Social />
                </CardFooter>
            )}
            <CardFooter>
                <Redirect label={redirectButtonLabel} href={redirectButtonHref}/>
            </CardFooter>
        </Card>
    )
}