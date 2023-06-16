import { useParams } from "react-router-dom";
import useMyClasses from "../../../../hooks/useMyClasses";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import useTosta from "../../../../hooks/useTosta";
import { ToastContainer } from "react-toastify";
const Payment = () => {
    const [notify] = useTosta();
    const [myClasses] = useMyClasses([]);
    const { id } = useParams();
    const enrolledClass = myClasses?.find(data => data._id === id);
    const price = enrolledClass?.price;
    const priceForStripe = parseInt(price) * 100;
    console.log(priceForStripe);
    const payNow = async token => {
        try {
            const response = await axios({
                url: `${import.meta.env.VITE_url}/payment`,
                method: 'POST',
                data: {
                    amount: price,
                    token
                }
            })
            console.log(response);
            if (response.data.status === "success") {
                notify('Payment successful');
            }
        }
        catch (error) {
            console.log(error);
        }

    }
    return (
        <div className="text-center mt-8 flex w-full h-2/3 justify-center items-center">
            <div>
                <p className="text-4xl mb-8">Payment Amount ${price}</p>

                <StripeCheckout
                    stripeKey={`${import.meta.env.VITE_payment_publish_key}`}
                    label="pay now"
                    name="pay with card"
                    billingAddress
                    shippingAddress
                    amount={priceForStripe}
                    description={`Your total amount is $${price}`}
                    token={payNow}

                />
            </div>
            <ToastContainer/>
        </div>
    );
};

export default Payment;