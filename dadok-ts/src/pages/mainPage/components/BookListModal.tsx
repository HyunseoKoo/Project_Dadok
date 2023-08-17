export default function BookListModal({setIsOpenBookListModal}: {setIsOpenBookListModal : React.Dispatch<React.SetStateAction<boolean>>}) {
    
    const onCloseModal = () => {
        setIsOpenBookListModal(false);
    }
    
    return (
        <div 
        onClick={onCloseModal}
        className="cursor-pointer"
        >
            BookListModal
        </div>
    );
}

