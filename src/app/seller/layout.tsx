import SellerLayout from "@/sections/seller/layout/SellerLayout"
import { ReactNode } from "react"

const SellerMainLayout = ({ children }: { children: ReactNode }) => {
    return (
        <SellerLayout >
            {children}
        </SellerLayout>
    )
}

export default SellerMainLayout