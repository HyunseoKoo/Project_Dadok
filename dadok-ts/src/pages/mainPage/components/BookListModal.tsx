import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function BookListModal({setIsOpenBookListModal}: {setIsOpenBookListModal : React.Dispatch<React.SetStateAction<boolean>>}) {
    
    const onCloseModal = () => {
        setIsOpenBookListModal(false);
    }
    
    return (
        <>
            <div 
            onClick={onCloseModal}
            className="cursor-pointer absolute top-10 left-10"
            >
                <FontAwesomeIcon icon={faCircleXmark} className="text-[30px]"/>
            </div>
        </>
    );
}

