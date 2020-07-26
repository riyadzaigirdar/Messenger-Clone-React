import React, { forwardRef } from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'
import './Message.css'

const Message = forwardRef(({ username, message }, ref) => {
    const isTrue = username === message.username

    console.log(isTrue)
    console.log(username)
    console.log(message)
    return (
        <Card ref={ref} className={`card ${isTrue && "right"}`} elevation={6}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    {!isTrue && `${message.username || "Unknown User"} : `}{message.message}
                </Typography>
            </CardContent>
        </Card>
    )
})

export default Message