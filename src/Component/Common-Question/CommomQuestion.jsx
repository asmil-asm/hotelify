import { IoMdAdd } from "react-icons/io";
import './CommonQuestion.css'
import { motion, AnimatePresence } from 'framer-motion'
import { useActions } from "../../store/useStore";

export default function CommomQuestion() {
  const { showAnsware, setShaowAnsware } = useActions()

  let Questions=[
    {
      id:1,
question:'How do I make a hotel reservation on HoteLify?',
answare:'To book a hotel on HoteLify, simply select your destination, travel dates, and number of guests on the page. Then browse the available hotels and choose the hotel you want to book. Follow the steps to enter your payment information and complete your reservation'
    },
        {
          id:2,
question:'How can I get hotels at low prices on HoteLify?',
answare:'There are many ways to get affordable hotels on HoteLify. You can narrow down search results by filtering hotels according to your preferred price range, or you can sort results by price to view less expensive options first.'
    },
        {
          id:3,
question:'Where can I find hotel deals on HoteLify?',
answare:"HoteLify offers a wide range of hotel deals and promotions available throughout the year. You can easily find these special offers on the offers page. What's more, if you're a member of our loyalty program, you can log in to your account and discover exclusive discounted rates on our hotel listing pages."
    },
        {
          id:4,
question:'How can I get lower hotel prices?',
answare:'Sometimes booking hotels in the middle of the week is cheaper, but it also depends on the season.'
    },
        {
          id:5,
question:'Can I cancel or change my hotel reservation via HoteLify?',
answare:'It depends on the hotel policy and cancellation date. Please see the policy section on the relevant hotel pages. To cancel or change your reservations, log in to your HoteLify account, go to "My Reservations", and follow the instructions'
    },

  ]

  return (
    <div className='common-question'>
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1, transition: { duration: 3 } }}
      >
        Common Questions
      </motion.h2>

      <motion.div
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1, transition: { duration: 3 } }}
        className='info'
      >
        {Questions.map((item, index) => (
          <div className="box" key={index}>
            <div
              className="question"
              onClick={() => setShaowAnsware(index)}
            >
              <motion.div
                animate={{ rotate: showAnsware[index] ? 45 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <IoMdAdd />
              </motion.div>
              <div>{item.question}</div>
            </div>

            <AnimatePresence initial={false}>
              {showAnsware[index] && (
                <motion.div
                  className="answare"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  style={{ overflow: "hidden" }}
                >
                  <div className="answare-inner">
                    {item.answare}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </motion.div>
    </div>
  )
}