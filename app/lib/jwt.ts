import jwt, { JwtPayload } from "jsonwebtoken"


interface SignOption {
    expiresIn?: string | number
}


const DEFAULT_SIGN_OPTIONS:SignOption={
    expiresIn: "1h"
}


// creates the JWT
export function signJwtAccessToken (payload: JwtPayload, options: SignOption=DEFAULT_SIGN_OPTIONS){

    const secretKey = process.env.SECRET_KEY

    const token = jwt.sign(payload,secretKey!, options)

    return token

}

// verifies the token in the header of requests. Used to protected API endpoints.

export function verifyJwt (token:string) {
    try {

        const secretKey = process.env.SECRET_KEY

        const decoded = jwt.verify(token, secretKey!)

        return decoded as JwtPayload
        
    } catch (error) {

        console.log(error)
        return null
        
    }

}