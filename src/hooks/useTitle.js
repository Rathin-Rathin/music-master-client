import { useEffect } from "react";

const useTitle = (title ) => {
    useEffect(() => {
        document.title = `Music-master | ${title}`;
    },[title])
}
export default useTitle;