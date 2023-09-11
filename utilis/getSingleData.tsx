export const getsingleData = (data: any, name: string) => {
    if(data){
        const getdata = data.find((item: any) => item.name === name)?.value;
        return getdata
    }
}