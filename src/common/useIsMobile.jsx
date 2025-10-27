const useIsMobile =() =>{
    const screenWidth = window.screen.width;
    let isMob;
    if(screenWidth<=487) isMob = true;
    return isMob;
}
export default useIsMobile;