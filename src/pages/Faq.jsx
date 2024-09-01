import HeaderLayout from '@/components/SectionLayout/HeaderLayout'
import SectionLayout from '@/components/SectionLayout/SectionLayout'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import React from 'react'

const Faq = () => {
  return (
    <div>
      <HeaderLayout heading={'Faqs'} page={'Faqs'} />
      <SectionLayout title={'COMMON QUESTIONS'} className={'bg-[#f6f6f6]'} mainHeading={'About Our Projects & Services'}>
        <Accordion type="single" collapsible className={'space-y-5 bg-[#f6f6f6'}>
          <AccordionItem className={'px-5 py-2 border-black border rounded-lg'} value="item-1">
            <AccordionTrigger className={'font-bold text-xl text-left'}>What Is Your Service Pricing Structure?</AccordionTrigger>
            <AccordionContent>
              Condimentum id venenatis a condimentum. Nunc congue nisi vitae suscipit tellus mauris a diam maecenas. Adipiscing bibendum est ultricies integer quis auctor elit.Commodo ullamcorper a lacus vestibulum sed. Mauris sit amet massa vitae.Egestas fringilla phasellus faucibus scelerisque eleifend. Egestas dui id ornare arcu odio.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className={'px-5 py-2 border-black border rounded-lg'} value="item-2">
            <AccordionTrigger className={'font-bold text-xl text-left'}>What Are The Payment Options Do You Have?
            </AccordionTrigger>
            <AccordionContent>
              Odio ut enim blandit volutpat maecenas volutpat blandit aliquam. Sit amet facilisis magna etiam tempor orci. Imperdiet nulla malesuada pellentesque elit. Adipiscing tristique risus nec feugiat. Proin sed libero enim sed faucibus.Ultricies lacus sed turpis tincidunt id. Urna duis convallis convallis tellus.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className={'px-5 py-2 border-black border rounded-lg'} value="item-3">
            <AccordionTrigger className={'font-bold text-xl text-left'}>Do You Follow All Guidelines & Norms?
            </AccordionTrigger>
            <AccordionContent>
              Malesuada fames ac turpis egestas integer eget aliquet. Risus viverra adipiscing at in tellus. Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere. Lectus proin nibh nisl condimentum.Lectus mauris ultrices eros in cursus turpis massa tincidunt dui. Tempor nec feugiat nisl pretium fusce id velit ut.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className={'px-5 py-2 border-black border rounded-lg'} value="item-4">
            <AccordionTrigger className={'font-bold text-xl text-left'}>Do You Use Freelancers Or Your In-House Team?
            </AccordionTrigger>
            <AccordionContent>
              Justo laoreet sit amet cursus sit amet dictum sit amet. Amet venenatis urna cursus eget nunc. Vitae elementum curabitur vitae nunc sed velit dignissim. Sit amet nisl purus in mollis nunc sed id semper. Rhoncus urna neque viverra justo nec ultrices dui sapien eget.Sed enim ut sem viverra aliquet eget sit amet tellus.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className={'px-5 py-2 border-black border rounded-lg'} value="item-5">
            <AccordionTrigger className={'font-bold text-xl text-left'}>What Kind Of Marketing Techniques Do You Follow?</AccordionTrigger>
            <AccordionContent>
              Fringilla est ullamcorper eget nulla. Enim sed faucibus turpis in eu mi. Nibh tellus molestie nunc non blandit massa enim nec. Eros donec ac odio tempor orci dapibus ultrices. At augue eget arcu dictum varius duis at.Morbi leo urna molestie at. Egestas diam in arcu cursus euismod quis viverra bibendum arcu vitae nibh.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className={'px-5 py-2 border-black border rounded-lg'} value="item-6">
            <AccordionTrigger className={'font-bold text-xl text-left'}>Do You Provide Special Focus On Private Companies?</AccordionTrigger>
            <AccordionContent>
              Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula. Lacus viverra vitae congue eu. Dictum at tempor commodo ullamcorper a lacus. Maecenas ultricies mi eget mauris pharetra.Ut venenatis tellus in metus vulputate eu scelerisque felis. Orci eu lobortis etiam erat velit scelerisque elementum nibh.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

      </SectionLayout>
    </div>
  )
}

export default Faq
