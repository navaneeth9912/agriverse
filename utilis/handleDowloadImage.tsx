import { ToastDangerMessage } from "./toastMessage";
export const handleDownloadImages = async (imgLink:any, fileName:string) => {
    console.log(imgLink,"imglink")
    try {
        const response = await fetch(imgLink);
        const blob = await response.blob();

        const downloadLink = document.createElement('a');
        downloadLink.href = window.URL.createObjectURL(blob);
        downloadLink.download = fileName;
        downloadLink.click();
        window.URL.revokeObjectURL(downloadLink.href);
        downloadLink.remove();
    } catch (error) {
        console.error('Error downloading image:', error);
        ToastDangerMessage('Error downloading image try again !')
    }
};
