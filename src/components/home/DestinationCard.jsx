/*const DestinationCard = ({title, location, imageUrl}) => {
    return (
        <div className="flex flex-col bg-cream rounded-[20px] w-[300px] h-[375px]">
            <div className="relative overflow-hidden bg-cover">
                <img className="w-[300px] h-[300px] rounded-t-[20px]" src="https://www.orgbluewater.com/wp-content/uploads/2021/10/DJI_0168.jpg" alt="Card Image"></img>
            </div>
            <div className="p-4 ml-2 flex flex-col">
                <h3 className="font-jaldi text-blue font-bold text-[25px]">Cayo de Agua</h3>
                <p className="font-jaldi text-blue text-[20px] mt-[-5px]">Venezuela</p>

            </div>

        </div>
    )
}

export default DestinationCard*/

const DestinationCard = ({title, location, imageUrl}) => {
    return (
        <div className="flex flex-col bg-cream rounded-[20px] w-[300px] h-[375px]">
            <div className="relative overflow-hidden bg-cover">
                <img className="w-[300px] h-[300px] rounded-t-[20px]" src={imageUrl} alt="Card Image"></img>
            </div>
            <div className="p-4 ml-2 flex flex-col">
                <h3 className="font-jaldi text-blue font-bold text-[25px]">{title}</h3>
                <p className="font-jaldi text-blue text-[20px] mt-[-5px]">{location}</p>

            </div>

        </div>
    )
}

export default DestinationCard