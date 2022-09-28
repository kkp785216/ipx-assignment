import React from 'react'
import { CollapseCard, CollapseCardBox, CollapseCardList } from '../components/CollapseCard'
import CommonShare from '../components/CommonShare'
import { Section } from '../components/Layout'

const Home = () => {
  return (
    <div>
      <Section>
        <CommonShare />
      </Section>

      <Section>
        <div className='mt-16'>
          <CollapseCard heading='Benefits of Investment'>
            <CollapseCardList
              title='Should we put all four in the description?'
              description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus ligula suspendisse dictum sed turpis ante tortor egestas arcu. Morbi at egestas mauris eu at elit phasellus et euismod. Magnis vel est egestas ut.'
              active={true}
            />
            <CollapseCardList
              title='Infographic with icons. Would like more info about e-commerce platforms for books and games.'
              description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus ligula suspendisse dictum sed turpis ante tortor egestas arcu. Morbi at egestas mauris eu at elit phasellus et euismod. Magnis vel est egestas ut.'
              active={false}
            />
            <CollapseCardList
              title='Infographic with icons. Would like more info about e-commerce platforms for books and games.'
              description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus ligula suspendisse dictum sed turpis ante tortor egestas arcu. Morbi at egestas mauris eu at elit phasellus et euismod. Magnis vel est egestas ut.'
              active={false}
            />
          </CollapseCard>
        </div>
      </Section>

      <Section>
        <div className='mt-16'>
          <CollapseCard heading='Terms of Purchase'>
            <CollapseCardList
              title='Should we put all four in the description?'
              description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus ligula suspendisse dictum sed turpis ante tortor egestas arcu. Morbi at egestas mauris eu at elit phasellus et euismod. Magnis vel est egestas ut.'
              active={true}
            />
            <CollapseCardList
              title='Infographic with icons. Would like more info about e-commerce platforms for books and games.'
              description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus ligula suspendisse dictum sed turpis ante tortor egestas arcu. Morbi at egestas mauris eu at elit phasellus et euismod. Magnis vel est egestas ut.'
              active={false}
            />
          </CollapseCard>
        </div>
      </Section>

      <Section>
        <div className='mt-16'>
          <CollapseCardBox heading='How to buy'>
            <CollapseCardList
              title='Should we put all four in the description?'
              description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus ligula suspendisse dictum sed turpis ante tortor egestas arcu. Morbi at egestas mauris eu at elit phasellus et euismod. Magnis vel est egestas ut.'
              active={true}
            />
            <CollapseCardList
              title='Infographic with icons. Would like more info about e-commerce platforms for books and games.'
              description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus ligula suspendisse dictum sed turpis ante tortor egestas arcu. Morbi at egestas mauris eu at elit phasellus et euismod. Magnis vel est egestas ut.'
              active={false}
            />
          </CollapseCardBox>
        </div>
      </Section>

      <Section>
        <div className='mt-16'>
          <CollapseCard heading='Stay connected'>

          </CollapseCard>
        </div>
      </Section>
    </div>
  )
}

export default Home