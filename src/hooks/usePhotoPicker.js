const usePhotoPicker = (setPhoto) => {
    const loadPhoto = (event) => {
        if (event.target.files && event.target.files[0]) {
            let reader = new FileReader();
            reader.onload = (e) => {
                setPhoto(e.target.result);
            };
            reader.readAsDataURL(event.target.files[0]);

        }
    }
    const createFilePicker = () => {
        const fileSelector = document.createElement('input');
        fileSelector.setAttribute('type', 'file');
        fileSelector.addEventListener('change', loadPhoto)
        return fileSelector;
    }
    const filePicker = createFilePicker();

    const openFilePicker = () => {
        filePicker.click()
    }

    return openFilePicker;


}

export default usePhotoPicker