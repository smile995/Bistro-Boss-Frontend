import { useContext } from "react"
import { BistroContextApi } from "../BistroContext/BistroContext"


const useBistro = () => {
    const data= useContext(BistroContextApi)
    return data
}

export default useBistro