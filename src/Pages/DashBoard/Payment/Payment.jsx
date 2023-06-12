
import { Helmet } from 'react-helmet-async';
import CheckoutForm from './CheckoutForm';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import useEnrollStudent from '../../../hooks/useEnrollStudent';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway);
const Payment = () => {

    const [enroll] = useEnrollStudent();
    const total = enroll.reduce((sum, item) => sum + item.price, 0);
    const price = total;


    return (
        <div className='w-2/3'>
            <Helmet>
                <title>Academy | Payment</title>
            </Helmet>
            <Elements stripe={stripePromise}>
                <CheckoutForm price={price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;