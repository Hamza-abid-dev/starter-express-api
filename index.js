const express = require('express')
const bodyParser = require('body-parser');
const app = express()
app.use(bodyParser.json());
app.get('/', (req, res) => {
  res.json(api)
})
app.get('/:id', (req, res) => {
  const id = +req.params.id;
  const card = api.filter(card => card.id === id);
  res.json(card);
})

app.listen(process.env.PORT || 3000)
let api = [
    {
      id: 1,
      image: 'https://truckdispatch360.com/wp-content/uploads/2022/09/how-to-be-a-truck-dispatcher-from-home.jpg',
      title: "How To Be A Truck Dispatcher From Home",
      discription: "How To Be A Truck Dispatcher From Home How To Dispatch Trucks From Home Post-pandemic, many jobs have been shifted to remote, cutting out many",
      btn: "READ MORE »",
      detailtitle: 'How To Dispatch Trucks From Home',
      detaildiscription:[
        'Post-pandemic, many jobs have been shifted to remote, cutting out many hours wasted in commuting, and working from the comfort of the home.',
        'You may consider the benefits of working as a truck dispatcher from home, for a trucking company, where you can work with no cap on your income with a commission-based job. As a truck dispatcher, you are a point of contact between brokers, clients, and drivers. In order to do your job, you should be able to communicate and organize schedules.',
        'In order to work remotely as a truck dispatcher, you will need your phone and your computer/laptop with internet service. This will allow you to perform your job duties as a truck dispatcher remotely, which is to locate, negotiate, and book loads for their clients. As long as you have internet service on a computer/laptop, you can open the load board and fulfill your truck dispatcher duties. You can negotiate then with a broker, once you’ve found a load that meets your client’s needs.',
        'We teach the exact steps on what exactly is required to fulfill your duties as a truck dispatcher in our online Truck Dispatcher Training course, answering any questions you may have.',
        'Now, once you’ve negotiated the load with a broker, you complete paperwork such as a broker carrier agreement. You can complete this paperwork remotely by using a PDF editor app and e-fax the completed paperwork to the broker.',
        'Then, you simply wait for the rate confirmation, which will most likely be communicated via email. Then, you relay this information to your client/driver. Thus, your job is complete and you have successfully fulfilled your duties, even while working remotely. You can work from anywhere in the world, as long as you have good phone and internet service, allowing seamless communication between you and the parties to the transaction.',
        'In our Truck Dispatcher Training Course we show you exactly how this can be done remotely, and you can live and make money as a truck dispatcher from the comfort of your own home, averaging about $1,500-$1,800 a week as a top-performing dispatcher for trucks.',
        'If you want to learn more about How To Become A Truck Dispatcher, read our step by step guide we’ve created for you here.'
      ]
    },
    {
      id: 2,
      image: 'https://truckdispatch360.com/wp-content/uploads/2022/03/Which-Semi-Truck-Gets-The-Best-Fuel-Mileage%E2%80%8B.jpg',
      title: "Average Fuel Mileage for Semi Trucks",
      discription: "Average Fuel Mileage For Semi Trucks Which Semi Truck Gets The Best Fuel Mileage Semi-trucks get an average of 6.5 miles/gallon. This number depends on",
      btn: "READ MORE »",
      detailtitle: 'Which Semi Truck Gets The Best Fuel Mileage',
      detaildiscription: 'Semi-trucks get an average of 6.5 miles/gallon. This number depends on the make, model, and the conditions of driving the semi (incline, load weight, etc…). On a full tank of diesel fuel, semi-trucks typically travel around 2,000 miles (referenced for a tank of 300 gallons). Semi-trucks on average drive 54,000 miles a year. Due to the large mileage that trucks need to drive due to the nature of their work, it is important to consider what trucks have the best MPG.',
      semititle: 'Currently, these are our top semi-trucks that get the best fuel mileage:',
      tabledataleft:[
        '<b>Semi-Truck</b>',
        'Freightliner Evolution I',
        'International ProStar ES',
        'Kenworth T680 Advantage',
        'Peterbilt 579 Epiq',
        'Mack Pinnacle',
        'Volvo VNL 670',
        'Freightliner Columbia',
        'Volvo 780 Ishift',
        'Kenworth T600B'
      ],
      tabledataright:[
        '<b>Mileage</b>',
        '10.67 MPG',
        '9 MPG',
        '9 MPG',
        '9 MPG',
        '7.6 MPG',
        '5.2 MPG',
        '5 MPG',
        '5 MPG',
        '4 MPG',

      ],
      endline: 'To make the best of your truck, you need the best truck dispatch company on your side.'
    },
    {
      id: 3,
      image: 'https://truckdispatch360.com/wp-content/uploads/2022/03/owner-operator.jpg',
      title: "What Kind of Insurance Do Truck Drivers Need",
      discription: "What Kind of Insurance Do Truck Drivers Need What Insurance Do Truck Drivers Need Insurance is necessary for truckers and trucking businesses. The specific type",
      btn: "READ MORE »",
      detailtitle: 'What Insurance Do Truck Drivers Need',
      detaildiscription:[
        'Insurance is necessary for truckers and trucking businesses. The specific type of insurance will depend on the type of vehicle or cargo. We suggest staying in touch with your insurance broker so you can get the best benefits from each policy.',
        'In order to operate legally, these entities need insurance. It is a federal requirement to have auto liability. This provides protection if a 3rd party is injured.',
        'Required insurance For Truck Drivers:',
        'Proof of liability insurance',
        'This insurance is necessary for the Operating Authority/MC number application for the DOT and FMCSA. Under any safety inspection, you will be asked for proof of insurance.',
        'Safety Assurance for Customers',
        'Shippers want to trust you with freight, proof of liability insurance provides peace of mind. They don’t want damaged cargo or late deliveries to affect their business negatively. If an accident does occur, the shippers are protected by your liability insurance.',
        'Safety Assurance for Yourself',
        'Not only does insurance provide peace of mind for shippers, it protects you. If there is damage to your freight, vehicle, or driver, you won’t have to pay for it out of pocket. Insurance will cover the cost, and you can continue running your business. These insurances protect you from the high costs of potential lawsuits. Also, you will qualify for leases and contracts as long as you have insurance and shippers will want to work with you. ',
        'What Insurance Do Truck Drivers Need to Operate?',
        'Required:',
        'Public liability insurance ',
        'Cargo insurance ',
        'Surety Bond/Trust Fund Agreement ',
        'Service of Process Agents ',
        'Endorsement for Motor Carrier Policies of Insurance for Public Liability ',
        'Overview: ',
        'Public liability insurance',
        'You need this for physical injury or property damage that was caused by your truck. Not only does it cover the driver, it covers third parties who may have been injured. Also, if you damage public property, it will cover that as well. Normally this insurance covers between $750,000 and $5,000,000. ',
        'Cargo insurance',
        'This is for damage to the freight itself, including employee mistakes, Customs problems, theft, etc… You are required by FMCSA to get cargo coverage of $5,000/vehicle and $10,000/occurrence.',
        'Surety Bond/Trust Fund Agreement.',
        'This is needed for drivers. Coverage of $75,000.',
        'Service of Process Agents',
        'This is a representative who you can designate/may have to pay for who will be responsible for court papers that may be served in a proceeding against an entity.',
        'Endorsement for Motor Carrier Policies of Insurance for Public Liability',
        'Additional insurance considerations for yourself',
        'These may not be required but they are there to protect you when things inevitably go wrong.',
        'Health insurance ',
        'Disability insurance ',
        'Insurance may seem like a hassle to obtain, however, insurance protects you. If you have any questions, feel free to contact Truck Dispatch 360  at (404)-987-8447.',
        '(404) 987-8447',
      ]
    },
    {
      id: 4,
      image: 'https://truckdispatch360.com/wp-content/uploads/2022/03/reasons-to-become-an-owner-operator.jpg',
      title: "Top Reasons to Be an Owner-Operator",
      discription: "Top Reasons to Be an Owner-Operator Reasons To Be An Owner Operator Truck Driver The truck industry is growing fast. Drivers are increasingly switching over",
      btn: "READ MORE »",
      detailtitle: 'Reasons To Be An Owner Operator Truck Driver',
      detailtitle2: 'The truck industry is growing fast. Drivers are increasingly switching over to owner-operators as the financial reward is much greater.',
      detaildiscription:[
        "5) The sky's the limit.",
        'As an owner-operator you have complete control over how much money you make. How you run your business and the efficiency of your operations will determine your financial compensation.',
        '4) Executive Business Decisions',
        'As an owner-operator, the only policy you need to follow is your own. You don’t need to follow another company’s policy unless you lease to them. You’re your own boss.',
        '3) Picking Your Own Routes',
        'You can pick any route and can pick any load. You’re no longer told by a company what route to drive by the carrier.',
        'Tax Deductions',
        'You get to benefit from tax deductions that company drivers don’t get to experience.',
        '1) Flexibility',
        'Your lifestyle is not controlled by a schedule someone else created. As an owner-operator you make your own schedule. You check out our other article if you want to learn how to become an owner-operator truck driver.',
        'After you’ve become an owner-operator, the next step is to hire a truck dispatch company that can handle all your dispatching needs and keep your truck rolling. If you would like to do your own dispatching, it would be highly beneficial to take a truck dispatcher training course to get yourself familiarized with the industry and learn to dispatch.',
        '(404) 987-8447',
      ]
    },
    {
      id: 5,
      image: 'https://truckdispatch360.com/wp-content/uploads/2022/03/trucking.jpg',
      title: "How To Become An Owner Operator",
      discription: "How to Become an Owner Operator Steps To Become An Owner Operator Truck Driver Becoming an owner operator truck driver is attractive because owner operators",
      btn: "READ MORE »",
      detailtitle: 'Steps To Become An Owner Operator Truck Driver',
      detaildiscription:[
        'Becoming an owner operator truck driver is attractive because owner operators generally earn higher per-mile rates than company drivers. If you run your company efficiently, you can make significantly more money as an owner operator. As an independent contractor, you control how much money you can make and this makes world of a difference.',
        '1) Plan',
        'Before you start, you need a business plan. You must make sure that your finances can cover expenses for the first year of operating your business. You’ll need to pay for insurance, normal living expenses, and equipment. This is crucial in alleviating any potential financial risk you may face.',
        '2) Qualifications',
        'In order to get qualified you need to obtain your CDL (Commercial Driver’s License) so that you can operate a Commercial Motor Vehicle (CMV). You must obtain your CDL in your home state. There are 3 steps in getting your CDL. ',
        'First, get the Commercial Learner’s Permit (CLP). This will allow you to practice on the road but you must have someone with an active CDL supervising. Obtaining the CDL involves tests and a background check on your driving record within the last 10 years. Usually, a DOT medical card is necessary. In order to prepare for the permit testing, study the CDL manual for your state. For example, see the Illinois CDL study guide. ',
        'Second, after obtaining your permit (CLP), you need to complete the entry-level driver training. You can find a training provider on the training ELDT provider registry. ',
        'Third, obtain your CDL (commercial driver’s license). Once you’ve had your CLP for 14 days and completed your ELDT training, you can take the skills test for the CDL. There are 3 parts to the test including: Vehicle Inspection Test, Basic Controls Tests, and Road Test.',
        '3) The Building Basics',
        'Make sure to allocate a sufficient amount of time in picking and purchasing your truck. You need to keep in mind the load and the route. Have your financial budget in mind when purchasing your equipment. Compare the actual costs you encounter for your equipment to the initial business plan you created. To be a successful owner-operator, planning and preparation and making efficient decisions is necessary.',
        '4) Registration',
        'Now you need to make the decision whether as an owner-operator will you operate under your own authority or lease to a company. If you’re under your own authority, you have to find clients and manage your business. This option allows you the freedom to make all your own choices. ',
        'However, if you lease to a company it may be a smoother way to run your business as the loads and lanes will be taken care of for you. The downside is, you give up some of your business freedom in following the regulations of the company you lease with. Depending on your business expectations, make the decision to be an owner-operator under their own authority or lease to a company.',
        '6) Insurance',
        'Depending on the state you’re registered in, there will be insurance requirements to comply with. Make sure the insurance you pay for has coverage in the states you will operate in. Legal compliance is a must in successful business operations of owner-operators.',
        '7) Dispatching Company',
        'After you register your company, obtain your equipment, complete all your filings with the FMCSA and obtain insurance coverage, the next step is to hire a truck dispatch company that can handle all your dispatching needs and keep your truck rolling. If you would like to do your own dispatching, it would be highly beneficial to take a truck dispatcher training course to get yourself familiarized with the industry and learn dispatching. ',
        '(404) 987-8447',
      ]
    },
    {
      id: 6,
      image: 'https://truckdispatch360.com/wp-content/uploads/2022/02/Truck-Dispatcher.jpg',
      title: "How To Become A Truck Dispatcher",
      discription: "How To Become A Truck Dispatcher How To Become A Truck Dispatcher Being a truck dispatcher means negotiating, booking loads, handling paperwork, arranging and coordinating",
      btn: "READ MORE »",
      detailtitle: 'How To Become A Truck Dispatcher',
      detaildiscription:[
        'Being a truck dispatcher means negotiating, booking loads, handling paperwork, arranging and coordinating the delivery of various cargo loads between two primary groups: brokers and carriers (truck drivers).',
        'To be a successful truck dispatcher, one must communicate effectively, have strong organizational skills, and be able to problem-solve.',
        'There are many benefits of becoming a truck dispatcher. Since it is a profession, one of the main questions interested parties have is how much you can reasonably expect to make. According to salary comparison site Comparably, the middle 57% of truck dispatchers make between $42,806 and $107,015. Salary research site Salary.com puts the median salary at $51,176, with the top 75% of earners earning at least $60,013.',
        'Beyond the salary for truck dispatcher, it also offers the flexibility of being able to work from your home. In a world where more and more work is going remote, having the security of a job that can be done from the convenience of one’s home is an undeniably positive aspect.',
        'Beyond the basic elements of the job and the salary lie many important details. We have put together this guide to becoming a truck dispatcher to help those interested with the following:',
        'The job duties and responsibilities of a truck dispatcher',
        'How much truck dispatchers make, along with their earning potential',
        'The steps to take to become a truck dispatcher',
        'The skills necessary to be a successful truck dispatcher',
        'Where to find the training to start your career as a truck dispatcher',
        '(404) 987-8447',
      ]
    },
  ];
