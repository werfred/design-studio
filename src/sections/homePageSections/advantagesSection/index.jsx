import {useState} from 'react'
import Image from 'next/image'

import * as Styles from './styles'
import BaseContainer from 'components/BaseContainer'
import Typography from 'components/Typography'
import ContactSources from 'components/ContactSources'

import linkedIn from 'images/clients/linkedIn.png'


const AdvantagesSection = () => {
  const slides = ['About us', 'Work process', 'Our clients', 'Contacts']
  const [currentSlide, setCurrentSlide] = useState('About us')

  const handleClick = (slideName) => {
    setCurrentSlide(slides.filter((slide) => slide === slideName)[0])
  }

  return (
    <Styles.AdvantagesSection>
      <BaseContainer>
        <Styles.HeadingsContainer>
          {slides.map((slide, index) => (
            <Styles.Heading key={index} size={2} active={slide === currentSlide} onClick={() => handleClick(slide)}>
              {slide}
            </Styles.Heading>
          ))}
        </Styles.HeadingsContainer>


        <Styles.Slider>
          <Styles.SlideAboutUs active={currentSlide === 'About us'}>
            <Styles.SlideHeading tag={'h3'} size={4} textColor={'#fff'} fontWeight={'700'}>
              Talented and professional team
            </Styles.SlideHeading>
            <div>
              <Typography>
                A strong team is the key to the most effective solutions to your tasks.
                Each new project is a kind of challenge for us, which implies finding a unique solution.
              </Typography>
              <Typography>
                Years of experience in communication, web and graphic design not only hone our skills,
                it allows you to provide the client with ready-made solutions that will work effectively.
              </Typography>
            </div>
          </Styles.SlideAboutUs>

          <Styles.SlideWorkProcess active={currentSlide === 'Work process'}>
            <Styles.SlideHeading tag={'h3'} size={4} textColor={'#fff'} fontWeight={700}>
              Project implementation process
            </Styles.SlideHeading>
            <Styles.WorkSteps>

              <Styles.WorkStep>
                <div>
                  <Styles.Circle>
                    <Typography size={3} fontWeight={700}>1</Typography>
                  </Styles.Circle>
                  <Styles.Line />
                </div>
                <Typography tag={'p'}>
                  Technical task
                </Typography>
                <Typography>
                  Filling out the briefing, additional questions.
                </Typography>
              </Styles.WorkStep>

              <Styles.WorkStep>
                <div>
                  <Styles.Circle>
                    <Typography size={3} fontWeight={700}>2</Typography>
                  </Styles.Circle>
                  <Styles.Line />
                </div>
                <Typography tag={'p'}>
                  Development of conceptual options
                </Typography>
                <Typography>
                  We form ideas and start to implement them - we develop conceptual options.
                </Typography>
              </Styles.WorkStep>
              <Styles.WorkStep>
                <Styles.Circle><Typography size={3} fontWeight={700}>3</Typography></Styles.Circle>
                <Typography tag={'p'}>
                  Project design
                </Typography>
                <Typography>
                  Formation of output documents, preparation of working files and their transfer to the client.
                </Typography>
              </Styles.WorkStep>
            </Styles.WorkSteps>
          </Styles.SlideWorkProcess>

          <Styles.SlideClients active={currentSlide === 'Our clients'}>
            <Styles.SlideHeading tag={'h3'} size={4} fontWeight={700}>
              Our clients
            </Styles.SlideHeading>
            <Styles.ClientsLogos>
              {Array.from(Array(12).keys()).map((item, index) => (
                <Image
                  key={index}
                  width={145}
                  height={35}
                  src={linkedIn}
                  alt={''} />
              ))}
            </Styles.ClientsLogos>
          </Styles.SlideClients>

          <Styles.SlideContactUs active={currentSlide === 'Contacts'}>
            <Styles.SlideHeading tag={'h3'} size={4} fontWeight={700}>
              You can write to us for any question
            </Styles.SlideHeading>
            <ContactSources />
          </Styles.SlideContactUs>
        </Styles.Slider>

      </BaseContainer>
    </Styles.AdvantagesSection>
  )
}

export default AdvantagesSection
