import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

const RowsPerPage = () => {
    return (
        <div className="flex flex-col xl:flex-row items-center w-full justify-end p-6">
            <div className="mx-5">
                <span className="">Rows per page:</span>
            </div>
            <div className="flex mt-3 xl:mt-0">
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select a fruit" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Fruits</SelectLabel>
                            <SelectItem value="apple">Apple</SelectItem>
                            <SelectItem value="banana">Banana</SelectItem>
                            <SelectItem value="blueberry">Blueberry</SelectItem>
                            <SelectItem value="grapes">Grapes</SelectItem>
                            <SelectItem value="pineapple">Pineapple</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <div className="flex mx-5 items-center">
                    <span>1</span>
                    <span>-</span>
                    <span>5</span>
                </div>
                <div className="flex items-center text-sm">
                    <ArrowBackIosIcon className="text-sm text-gray-500" />
                    <ArrowForwardIosIcon className="text-sm text-gray-500" />
                </div>
            </div>

        </div>
    )
}

export default RowsPerPage