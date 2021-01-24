import { useFormContext } from "react-hook-form";
export const ConnectForm =memo (({ children }) => {
    const methods = useFormContext();
    
    return children({...methods});
   },
   )