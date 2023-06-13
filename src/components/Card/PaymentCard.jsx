

const PaymentCard = ({course, index}) => {
    const { courseName, price, date, transactionId} = course;
    return (
        <tr className="">
            <td className="px-6 py-4 text-sm text-gray-500">
                {index + 1}
            </td>
           
            <td className="px-6 py-4">
                <div className="text-sm text-gray-900">
                    {courseName}
                </div>
            </td>
            <td className="px-6 py-4">
                <div className="text-sm text-gray-500">
                    {transactionId}
                </div>
            </td>
            <td className="px-6 py-4">
                <div className="text-sm text-gray-500">
                    {date.toLocaleString()}
                </div>
            </td>
          
            <td className="px-6 py-4">
                <div className="text-sm text-gray-500">
                    {price}
                </div>
            </td>
            

            
        </tr>
    );
};

export default PaymentCard;