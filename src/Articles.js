import {useEffect, useState} from 'react';
import './Articles.css';
let currentPost=1;
function Articles(){
    const [progressWidth,setProgressWidth]=useState('0%');
    const [prevButton,setPrevButton]=useState(true);
    const [nextButton,setNextButton]=useState(false);

    const handleClick=(e)=>{   
        // document.documentElement.scrollTop = 0;
        // window.scrollTo({top:0,behavior:'smooth'});
        /* enabling button */
        if(e.target.id==='prev'){
            --currentPost;
            setNextButton(false);
        }        
        else{
            ++currentPost;
            setPrevButton(false);
        }
        /* enabling button */
        
        /* disabling button and adjusting the progress bar width */
        if(currentPost===1){
            setProgressWidth('0%');
            setPrevButton(true);
        }
        else if(currentPost===2){
            setProgressWidth('33.33%');
        }
        else if(currentPost===3){
            setProgressWidth('66.66%');
        }
        else if(currentPost===4){
            setProgressWidth('100%');
            setNextButton(true);
        }
        /* disabling button and adjusting the progress bar width */

        /* pages in the progress bar */
        let divs=document.querySelectorAll('.circle');
        for(let i=0;i<divs.length;++i){
            divs[i].classList.add('active');
            if(i>currentPost-1)
            divs[i].classList.remove('active');
        }
        /* pages in the progress bar */  
    }


    useEffect(()=>{
        window.scrollTo({top:0,behavior:'smooth'});
    },[currentPost]);


    return (
        <div className="container container-xxl py-5 my-4">
            <br/><br/><br/><br/><br/>
            <div className="container my-4">
                <div className="container-sm d-flex justify-content-center">
                    <div className="container-sm">
                        <div className="progress-container">
                            <div className="progress bg-info" id="progress" style={{width:progressWidth, height:'1px'}}></div>
                            <div className="circle active">1</div>
                            <div className="circle">2</div>
                            <div className="circle">3</div>
                            <div className="circle">4</div>
                        </div>
                    </div>
                </div>
                <div className="article-text" id='article'>
                {/* article text */}
                {currentPost===1 && <Post1/>}
                {currentPost===2 && <Post2/>}
                {currentPost===3 && <Post3/>}
                {currentPost===4 && <Post4/>}
                </div>
                <div className="container-sm d-flex justify-content-end">
                    <button className='btn-article' id="prev" onClick={handleClick} disabled={prevButton}>Prev</button>
                    <button className="btn-article" id="next" onClick={handleClick} disabled={nextButton}>Next</button>
                </div>
            </div>
        </div>
    );
}

function Post1(){
    return(
        <div className='container-sm d-flex justify-content-center'>
            <div className='container-sm'>
                {/*<div className='w-100'>
                    <img style={{width:"100%"}} src="https://media.licdn.com/dms/image/D4E12AQE8_ENpL3uVcg/article-cover_image-shrink_423_752/0/1683034866473?e=1694649600&amp;v=beta&amp;t=uZlc40LRk0Y0VTlmnRTJbC6jJN7-5d4xWZuCCRY4f0A"/>
                </div>*/}
                <h1 style={{textAlign:'left'}}>Becoming a Physiotherapist in Germany: Process of Registration "Anerkennung"</h1>
                <div class="w-100">
                    For Indian Physiotherapists seeking to expand their career opportunities, Germany is a highly sought-after destination. In order to practice physiotherapy in Germany, one must complete the process of "Anerkennung" or recognition of qualifications. This article outlines the requirements and steps involved in the process of registration as a Physiotherapist in Germany.,
                    <br/><br/>
                    <h1 style={{textAlign:'left'}}>Requirements for Registration:</h1>
                    The first requirement for registering as a Physiotherapist in Germany is to have completed 4500 hours of training, which includes 2900 hours of university classes and 1600 hours of clinical training, from a recognized university. Additionally, applicants must have a B2 level German exam certificate, which demonstrates their proficiency in the German language.,
                    <br/><br/>
                    <h1 style={{textAlign:'left'}}>The Application Process:</h1>
                    Once all requirements are met, the application process can begin. The applicant will need to provide translated copies of their degree certificate, course transcripts, school certificates, and resume. All translations must be done by state-recognized translators. After the application is submitted, the processing time is approximately six months.,
                    <br/><br/>
                    <h1 style={{textAlign:'left'}}>Employment Opportunities:</h1>
                    After receiving recognition/registration, Indephysio arranges to match the Indian Physiotherapists with employers in Germany for online interviews. Once a job offer is provided, the applicant will be guided through the process of applying for a work visa. Currently, the process involves obtaining a work visa, but in the future, it may be possible to apply for a "Chancenkarte" if it is passed by the German parliament.,
                    <br/><br/>
                    <h1 style={{textAlign:'left'}}>Relocation Assistance:</h1>
                    Indephysio, an organization that specializes in organizing German language training and recruiting Indian Physiotherapists for employment in Germany, provides assistance in relocating to Germany. This includes finding an apartment and providing support until the applicant receives their first month's salary.,
                    <br/><br/>
                    <h1 style={{textAlign:'left'}}>Eligibility:</h1>
                    Final year students and graduated Physiotherapists from recognized universities in India are eligible to apply for the process of registration. Regardless of any age limit, you are allowed to apply, but it's highly questionable that your experience in India or additional certifications could be validated in germany, to know more about this, read the previous article ''German Physiotherapy Care system: Why Freshers in Indian Physiotherapy should aspire a career in Germany''
 To know more about the perks of working as a physiotherapist in Germany, you can find detailed information from the below article ''What are the benefits of Indian physiotherapists working in Germany ?'',In conclusion, becoming a Physiotherapist in Germany requires meeting specific requirements and going through a rigorous application process. However, with the help of organizations such as Indephysio, Indian Physiotherapists can find employment opportunities in Germany and benefit from the country's strong healthcare system and economy.
                </div>
                <div className='d-flex justify-content-end my-3'>
                    <div>
                        <h2>
                            <em>- Ram prakash</em>
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
}
function Post2(){
    return(
        <div className='container-sm d-flex justify-content-center'>
            <div className='conatiner-sm'>
                {/*<div className='w-100'>
                    <img style={{width:"100%"}} src="https://media.licdn.com/dms/image/D4E12AQEkemQH6l8iRQ/article-cover_image-shrink_423_752/0/1682202739126?e=1694649600&amp;v=beta&amp;t=O-VTCkXWLSsnTg0hOnoCMSHMhgv1GRjexYdjxBSsr4c"/>
            </div>*/}
                <h1 style={{textAlign:'left'}}>German Physiotherapy Care system: Why Freshers in Indian Physiotherapy should aspire a career in Germany</h1>
                <div className='w-100'>
                In this article I will explain about how physiotherapy services are delivered to patients, and how physiotherapists are reimbursed, and eventually the scope of practice for physiotherapists. Then I will throw some light on the huge gap in the physiotherapy workforce and how the freshers in Indian physiotherapy can make use of this opportunity.,
                <br/><br/>
                    <h1 style={{textAlign:'left'}}>Why freshers ?</h1>
                    According to the German healthcare landscape, physiotherapy has just become a degree program, so more than 90% of the physiotherapists in Germany has gone through just 3 years of professional training by polytechnic schools and not a university degree program. Moreover this 3 years program is still continued by the state, so most students are choosing to enter into the profession by the 3 year training rather than a degree program. So as a fresher from India, you are already better qualified to enter into the physiotherapy profession in Germany.,
                    <br/><br/>
                    <h1 style={{textAlign:'left'}}>Why rather freshers ? </h1>
                    When you start your career in Germany, even though you have several years of experience in other countries, you are considered as a fresher. Why so ?Germany is a welfare state, and it has a universal healthcare system, according to which every resident should have access to a standard healthcare. Hence, the public insurance funds set their parameters for a standard of care, including physiotherapy care delivery. In this way, the physiotherapy care is paid from the insurance coverage, so they set a standard price to be paid for every treatment. Private insurances determine their own prices, but still there is a standard price for each and every treatment.The patients who are in need of physiotherapy are identified by the primary and secondary care providers, then they are referred to Physiotherapy services with a standard prescription, that will contain certain treatment recommendations and only those treatments will be reimbursed by the insurances. Most commonly the prescribed treatments are Kranken Gymnastic (KG) or Manualle Therapie (MT) or Manual Lymph Drainage (MLD).Now the entry level physiotherapists are allowed to provide only basic physiotherapy treatments like KG, electrotherapy, heating modalities, cryotherapy, massage etc, so when they are employed by a private practice, their salary will be almost similar across Germany (which is currently 18 to 19 Euro per hour) . If the entry level physiotherapists are self-employed, then they can directly send the treatment receipts to the billing center which will cash-out their treatment receipts based on the rates provided by the public insurance funds and private insurance companies correspondingly.When the highly advanced physiotherapists who have completed certifications on specific advanced treatments like manual therapy, lymphatic drainage, TMJ mobilization, PNF etc, they are qualified to perform such advanced treatments. The treatment receipts which has such advanced treatment will be having a higher cash-out, so those physiotherapists performing such advanced treatments will receive higher salary. The quality of a physiotherapist in Germany is determined by the additional certifications for such advanced treatments, the years of experience is not valid here, as they are paid based on what treatments they are allowed to provide.The healthcare department of German states, are only verifying if you are a qualified physiotherapist, and they recognize you as an entry level physiotherapist. As your qualification as an advanced, highly qualified therapist in another country cannot be verified by the Insurance providers, you are required to undergo the advanced treatment techniques training and certifications in Germany by those institutes which are recognized by the insurance regulators. Therefore, whatever certifications, or experiences that you have gathered in another country is not valid in Germany. That doesn't mean, it is a bad idea for an experienced physiotherapist to aspire a career in Germany. If you are ready to explore a new life, and ready learn a new language and culture, then this land is full of opportunities. For those highly experienced physiotherapists, this land will still provide a faster growth, if you are ready to learn and grow.,
                    <br/><br/>
                    <h1 style={{textAlign:'left'}}>Career growth for physiotherapists in Germany </h1>
                    As you have understood the basic and advanced physiotherapy qualifications and how they are reimbursed, the ideal career growth for physiotherapists in Germany, starts as entry level basic qualified physiotherapist. Then as you are getting additional certifications for each treatment techniques, such as manual therapy, lymphatic drainage, your salary hikes correspondingly.So, how far can you grow your career in German Physiotherapy ? the answer is as long as you have the interest, there is always space to grow. The highest qualification is Heilpraktiker(You are allowed to prescribe treatments to the patients and those will be reimbursed by the insurance companies), Sectoral Heilpraktiker(The same as above, but limited to the physiotherapy sector), Osteopathy (They are also allowed to practice autonomously) some physiotherapists are also doing certificate courses in osteopathy and they are entering into autonomous practice.,
                    <br/><br/>
                    <h1 style={{textAlign:'left'}}>Why Germany needs more Physiotherapists ? </h1>
                    Firstly, the life-expectancy is on a continuous raise, the number of older people has already out-numbered the care potential of the state. When people live longer, they live more days with pain and physical difficulties that needs to be addressed. This bulk of care burden is the major appointment consumers of Physiotherapists in Germany.Secondly, Germany is a sport first nation, almost each and every kid has sport activity as an everyday school routine. Not only kids, most of the adults and elder people also also health freaks compared to other developed countries. To keep themselves fit and active, they have a physical activity atleast twice a week. This results in increasing Physiotherapy appointments for sports injury care, and therapy services for return to sports.Additionally, the post pandemic work from home (WfH) considered to reduce the work stress on the employees, but the physical stress has seemly increased, as the clear boundary between work and home doesn't exist. Moreover, the workstation at home is not always a professional work setup, that lead to ergonomic injuries and long term health conditions, once again adding more load to the physiotherapy appointments.Finally, physiotherapy profession in general is highly under staffed. Almost every practice has atleast one or more vacancy for physiotherapists. you can find more facts about this real-time issue in the following news article.Mangelberuf Physiotherapie – trotz zusätzlicher Milliarden fehlt das Personal - welt.deSo, now is the right time to aspire and work towards landing a job in Germany.,
                    <br/><br/>
                    <h1 style={{textAlign:'left'}}>What is the right time to start the Registration Process for Germany ?</h1>
                    As the famous proverb goes, "The right time to plant a tree was 20 years ago"; So does the right time to start the procedure to apply for the job in Germany is atleast 1 or 2 year ago. It takes you one full year to get the German language proficiency of B2. (if you are cramping for the exam within 6 to 8 months, it will not help you with the patient communication, so try and learn effectively)when you are in the German B1 training, we indephysio will kickstart your process, by translating your documents with the state authorized German translators.when you are have started your German B2 language, we will have submitted your application for registration as physiotherapist in Germany to the Health department of the corresponding state. This will reduce out waiting time for the registration and once you have completed your B2 exam, you will have already started to take interviews from the German Physio employers.When you receive your registration as a physiotherapist in Germany, then you are eligible to receive the job offer letter from the German employers and inturn the Visa.,
                    <br/><br/>
                    <h1 style={{textAlign:'left'}}>BONUS INFO:</h1>
                    Germany is planning to pass a new scheme for visa in the parliament soon, called as "chancenkarte" ,(click the link to read the article) means ‘opportunity card’.    The ‘chancenkarte’ will use a points system to enable workers with required skills to come to Germany more easily.It is part of a strategy proposed by Labour Minister Hubertus Heil to address the country’s labour shortages and is aimed at people who do not yet have a work contract in Germany. The points-based system will take into account qualifications, professional experience, age, German language skills and ties to Germany.Every year, quotas will be set depending on which industries need workers. Three out of four of the following criteria must also be met to apply for the scheme:    A degree or vocational training Three years’ professional experience Language skills (B2) or a previous stay in Germany    35 years old or younger Currently, most non-EU citizens need to have a job offer before they can relocate to Germany. A visa for job seekers already exists, but the 'chancenkarte' is expected to make it easier and faster for people looking to find work in Germany.With the opportunity card, the search for a job is made much easier. Even while looking for a job, employment of up to twenty hours per week is permitted, including a trial job with a future employer for up to two weeks.
                </div>
                <div className='d-flex justify-content-end my-3'>
                    <div>
                        <h2>
                            <em>- Ram praksh</em>
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
}
function Post3(){
    return(
        <div className='container-sm d-flex justify-content-center'>
            <div className='container-sm'>
                {/*<div className='w-100'>
                    <img style={{width: "100%"}} src="https://media.licdn.com/dms/image/D4E12AQHcpZs_aWz75Q/article-cover_image-shrink_423_752/0/1682846464087?e=1694649600&amp;v=beta&amp;t=RjDoNjdkQib0LlY-TH_LDQVNemjZH64PMpQGavSo0GM"/>
                    </div>*/}
                    <h1 style={{textAlign:'left'}}>What are the benefits of Indian physiotherapists working in Germany ?</h1>
                    <div className='w-100'>
                    Being an Indian physiotherapist, migrated to Germany and becoming a German physiotherapist, I can list you the perks in this article. The previous article eloborates about the German physiotherapy care system and how physiotherapists are paid, then I gave the reason why Indian freshers should apply for the Job. To read the previous article click here. In this article, I will just list down the benefits of working as a Physiotherapist in Germany.,
                    <br/><br/>
                    <h1 style={{textAlign:'left'}}>Financial benefits:</h1>
                    Although this point have already been discussed in the previous article, it is worth to reiterate. The entry level physiotherapists in Germany are paid 18 to 19 Euros per hour. According to data from the German Federal Employment Agency, a physiotherapist in Germany earns an average salary of around €39,000 per year If you have read the previous article, you will have known how this salary is determined and why it is almost same across Germany. The career growth is quite steady and faster in Germany, as the it is directly propotional to the treatments you are allowed to perform. If you keep increasing your qualifications like manual therapy certifications, lymphatic drainage techniques certification etc, your salary and the position will keep increasing. There is a trade secret here, when you get to know which treatments are reimbursed at a higher rate, and that too the private insurances rates are still higher, so if you can provide those treatments for those privately insured patients, then you end up making a lot of money.,
                    <br/><br/>
                    <h1 style={{textAlign:'left'}}>Social benefits</h1>
                    Germany is a welfare state, it's policies are framed towards the welfare of each and every resident. As you pay taxes, you and your family are protected by the state. 
                    <br/>
                    Sick leave and sick pay: If you are sick and unable to work for up to six weeks, your employer continues to pay your full salary, known as continued remuneration (Entgeldfortzahlung). However, if you have just started a job in a new company and you fall sick within the first four weeks, your employer does not have to keep on paying you. In this case, you can request sick pay from your public health insurance.If you are on sick leave for more than six weeks due to the same illness, publicly insured employees have the right to receive sick pay (Krankengeld). You can get Krankengeld for a maximum of 72 weeks. It does not matter whether your sick leave is due to physical or mental illness. 
                    <br/>
                    HOW MUCH ? It usually is the lower amount of either 70% of your gross monthly salary or 90% of your monthly net salary. Social contributions such as unemployment insurance, long-term care, and pension insurance will still be subtracted from your sick pay.
                    <br/>
                    If you are privately insured, you cannot claim sick pay; instead, you can claim your daily sickness allowance (Krankentagegeld) if it is part of your tariff.
                    <br/>
                    Maternity leave: If you become pregnant while working in Germany, you are legally entitled to fourteen weeks' maternity leave (at least six weeks before and eight weeks after childbirth).
                    <br/>
                    Your salary should not be affected during your maternity leave in Germany. Your employer should pay out what is called a maternity protection wage (Mutterschutzlohn). The earliest you can submit your application is seven weeks before your due date.
                    <br/>
                    The wage you will receive is as high as your average gross salary before the start of your pregnancy. If you receive a monthly salary, your wage will be calculated on the average of the last three months. If you get paid weekly, then it is calculated based on the past 13 weeks.
                    <br/>
                    The money you receive during your maternity leave is a normal salary, so you still need to pay taxes and social contributions.
                    <br/>
                    In addition, you can also apply for parental allowance (Elterngeld) and child allowance (Kindergeld), which are government subsidies for young families.
                    <br/>
                    Parental leave (Elternzeit): After the birth of a child, mothers and fathers have the right to take a break (unpaid) from work to care for their child and spend time with their family. During this time, the employer may only terminate the employment relationship in exceptional circumstances (e.g. insolvency, shutdown of the business). After parental leave, parents have the right to return and work at the same level as they did before. If you want to apply for parental leave, the so-called Elterngeldstellen (parental allowance offices) will help you get the state's financial assistance.
                    <br/>
                    Unemployment benefit (Arbeitslosgeld): In case losing your job, you are eligible to receive the state's support. If you have worked for at least twelve months within the last 30 months, you can receive unemployment benefits for six months. If you are younger than 50, you can receive unemployment benefits for a maximum of twelve months. Older people can receive benefits for up to 24 months.
                    <br/>
                    for instance, during the lockdown the state directly or through the employers provided financial support. These are just a few examples of the social benefits of an employed resident in Germany.,
                    <br/><br/>
                    <h1 style={{textAlign:'left'}}>Health Insurance:</h1>
                    Germany has two main health insurance systems: public and private. The majority of Germans are publicly insured, as only 10,6% have private health insurance.
                    <br/>
                    Compulsory vs. voluntary health insurance in GermanyCompulsory health insurance (pflichtversichert) = you must have public insurance. health insurance (freiwillig versichert) = you can choose between public and private health insurance.As a physiotherapists payscale you are qualified for public health insurance, unless you are self-employed. Public (a.k.a. statutory) health insurance in Germany is regulated by the government, and it is called gesetzliche Krankenversicherung (GKV). Most employed people in Germany have to be insured publicly, as they earn less than 66.600 euros a year. When you have statutory health insurance, you are automatically also insured for long-term care (Pflegeversicherung).
                    <br/>
                    When a statutory health insurance fund insures you, you receive a health insurance card, which you need to provide at the reception of a doctor’s office or hospital. Through this card, your doctor will automatically bill all costs (that are covered) to your health insurance, so you don’t have to deal with any paperwork.
                    <br/>
                    The cost of public health insurance in Germany is between 15,4% - 16,5% of your gross income (on average 16,2%). From your gross salary around 7.5% will be deducted and the rest will be paid by your employer.
                    <br/>
                    What are the services covered in the public health insurance is a whole new topic and very informative to know about, I will be covering this information in a new article.,
                    <br/><br/>
                    <h1 style={{textAlign:'left'}}>Job disability Insurance (Berufsunfähigkeitsversicherung):</h1>
                    Job disability insurance (Berufsunfähigkeitsversicherung) pays you a salary if you are permanently unable to do your job. For example, being a physiotherapist and you lose your fingers, or you suffer from a burnout.
                    <br/>
                    This insurance is useful if you have people who depend on you, or if you have a mortgage to pay. The price varies by profession. It’s usually cheap, because accidents that prevent you from doing your job are rare.,
                    <br/><br/>
                    <h1 style={{textAlign:'left'}}>Pension scheme :</h1>
                    When you are work and pay taxes, you are complusorily covered by the Public pension scheme. The statutory (public) pension insurance is the largest social security system in Germany. It provides protection against the risks of old age, disability and death, especially for employees, but also for certain self-employed persons and other groups of people.Old-age pensions are at the center of the range of benefits. They are the main source of income in old age for the majority of our population. In addition, the statutory pension insurance system grants pensions due to reduced earning capacity and pensions due to death (widow's/widower's pensions, education pensions and orphans' pensions) and provides medical and occupational rehabilitation benefits.,
                    <br/><br/>
                    <h1 style={{textAlign:'left'}}>Solidarity of the insured</h1>
                    Financing is on a pay-as-you-go basis, i.e. the contributions received by the pension insurance fund are immediately used to finance expenditure. The respective working generation thus provides for the generation of pensioners within the framework of the intergenerational solidarity community of the insured.,
                    <br/><br/>
                    <h1 style={{textAlign:'left'}}>Work-life balance:</h1>
                    Germany is known for its work ethic and high productivity levels which can make achieving work-life harmony a challenge for many individuals.
                    <br/><br/>
                    <h1 style={{textAlign:'left'}}>Time is important</h1>
                    Germans are punctual, and they don’t like to waste their time. They always try to complete their work within the deadline. Meetings usually start on time and end on time. This is the best part of the work culture in Germany.
                    <br/><br/>
                    <h1 style={{textAlign:'left'}}>Productivity and efficiency at work</h1>
                    Germans love productivity and efficiency at work. Germans are the most highly trained and productive workers. In the office, they talk less and work more. Everybody contributes to work in any organization.
                    <br/><br/>
                    <h1 style={{textAlign:'left'}}>Working hours</h1>
                    Daily working hours cannot exceed 8 hours in Germany. The work culture in Germany allows employees to work less and more productively. The Average working hours are 40 hours per week.
                    <br/><br/>
                    <h1 style={{textAlign:'left'}}>Work stays at work</h1>
                    The best part about Germany is that work stays at work. There is a clear line between work and private life. They also don’t work during lunch breaks.
                    <br/><br/>
                    <h1 style={{textAlign:'left'}}>Start now to land a job within the next 1 year</h1>
                    Indephysio is a recruitment company for Indian physiotherapists, it guides them to get trained in the German language, assists in the documentation works and prepares the Indian physiotherapists to land a job in Germany. we arrange online interviews and make sure you are placed in Germany as a Physiotherapist. to start the process apply now at <a href='/Admin/job'>click here</a> for online application.Wish you a great success and a prosperous career as a physiotherapist.
                </div>
                <div className='d-flex justify-content-end my-3'>
                    <div>
                        <h2>
                            <em>- Ram praksh</em>
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
}
function Post4(){
    const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    professionalLevel: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://inde.physioplustech.in/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        console.log('Form submitted successfully');
        // Clear form fields after submission if needed
        setFormData({
          fullName: '',
          email: '',
          mobile: '',
          professionalLevel: ''
        });
      } else {
        console.error('Error submitting form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="container-sm d-flex justify-content-center">
      <div className="container-sm">
        <h1 style={{ textAlign: 'left' }}>Submit the form to get Zoom meeting link.</h1>
        <div className="w-100">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <div className="form-floating">
                <input type="text" className="form-control" placeholder="" name="fullName" value={formData.fullName} onChange={handleChange} required />
                <label style={{ fontWeight: 'normal' }}>Full Name</label>
              </div>
            </div>
            <div className="mb-3">
              <div className="form-floating">
                <input type="email" className="form-control" placeholder="" name="email" value={formData.email} onChange={handleChange} required />
                <label style={{ fontWeight: 'normal' }}>Email address</label>
              </div>
            </div>
            <div className="mb-3">
              <div className="form-floating">
                <input type="number" className="form-control" placeholder="" name="mobile" value={formData.mobile} onChange={handleChange} required />
                <label style={{ fontWeight: 'normal' }}>Mobile</label>
              </div>
            </div>
            <div className="mb-3">
              <label style={{ fontWeight: 'normal' }}>Professional level</label>
              <textarea className="form-control" cols="30" rows="3" placeholder=" student at 7th semester/ 1 year experience/ 5 Years of experience" name="professionalLevel" value={formData.professionalLevel} onChange={handleChange}></textarea>
            </div>
            <button className="btn btn-primary" type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Articles;
