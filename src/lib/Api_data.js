export const GetApiData = async (url)=>{
    try {
        const res = await fetch(url);
        const resData = await res.json();
        if(!res.ok){
            throw new Error(`HTTP ERROR response error is: ${res.status}`);
        }
        return resData;

    } catch (error) {
        console.log("faild to fetch category", error);
    }
}