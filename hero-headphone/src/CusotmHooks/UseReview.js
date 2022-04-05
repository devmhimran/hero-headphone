import { useEffect, useState } from "react"



const useReview = () =>{
    const [review, setReview] = useState([]);

    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/devmhimran/dummy-api/main/Review-APi/review.json')
        .then(res => res.json())
        .then(data => setReview(data))
    }, [])

    return [review, setReview]
}

export default useReview;