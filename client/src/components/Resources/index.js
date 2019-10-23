import React, { Fragment } from 'react';
import Jumbotron from '../Jumbotron';
import ResouceItem from './ResourceItem';
import './Resouces.css';
const Resources = () => {
  return (
    <Fragment>
      <div className='row mx-0'>
        <div className='col-12 px-0'>
          <Jumbotron
            title='Learn G.E.M.S'
            subtitle='with these in-dept resources'
          />
        </div>
      </div>

      <div className='row mx-0 Event_Container'>
        <div className='container'>
          <div className='row mx-0 justify-content-center'>
            <ResouceItem
              groupTitle='RESOURCE PAGE'
              groupItem={[
                {
                  desc:
                    'Ohio Grandparent Kinship Coalition The Ohio Grandparent/Kinship Coalition(OGKC) is an organization consisting of kinship caregivers, kinship caregiver advocates and agencies throughout Ohio.',
                  link: 'https://www.ohiograndparentkinship.org/'
                }
              ]}
            />
            <ResouceItem
              groupTitle='SUPPORT GROUPS'
              groupItem={[
                {
                  desc:
                    'Search for a grandparent support group in your area -- Provided by AARP.',
                  link: 'https://www.aarp.org/caregiving/'
                }
              ]}
            />
            <ResouceItem
              groupTitle='GRANDPARENTS RAISING GRANDCHILDREN'
              groupItem={[
                {
                  desc:
                    'The Kinship Permanency Program – was created to support children in homesof their family ir friends  who have committed to caring for them when birth parents cannot.',
                  link: [
                    'https://www.ohiograndparentkinship.org/documents/KPI_poster.pdf',
                    'http://www.raisingyourgrandchildren.com/grandparent_and_kinship_caregivers.htm'
                  ]
                }
              ]}
            />
            <ResouceItem
              groupTitle='STATE POLICIES and LAWS'
              groupItem={[
                {
                  desc:
                    'The Grandfamilies State Law and Policy Resource Center: serves as a national legal resource in support of grandfamilies within and outside the child welfare system.',
                  link: 'http://www.grandfamilies.org/'
                },
                {
                  desc: 'Power of Attorney.',
                  link:
                    'https://www.ohiograndparentkinship.org/documents/Power-of-Attorney_2018.pdf'
                }
              ]}
            />

            <ResouceItem
              groupTitle='FINANCIAL ASSISTANCE'
              groupItem={[
                {
                  desc:
                    'Cash assistance – Apply at JFS and ask for “Child Only” TANF or Ohio Works First cash assistance. Eligibility is based on the child’s out-of-home status, not the caregiver’s income.',
                  link: [
                    'https://www.benefits.gov/benefit/1674',
                    'https://www.acf.hhs.gov/ofa/programs/tanf'
                  ]
                },
                {
                  desc:
                    'SNAP (Food Stamps) – This benefit is based on your household income and number of people living there. ',
                  link:
                    'http://www.raisingyourgrandchildren.com/Financial_Assistance.htm'
                },
                {
                  desc:
                    'Child care subsidy – This benefit is for low-income caregivers who are working. ',
                  link:
                    'https://www.aarp.org/relationships/friends-family/info-08-2011/grandfamilies-guide-support.html'
                },
                {
                  desc:
                    'Kinship Permanency Incentive Program – Financial supports are available for qualifying permanent kinship families (those with judicial custody). ',
                  link: 'https://jfs.ohio.gov/ocf/kinship_care.stm'
                }
              ]}
            />
            <ResouceItem
              groupTitle='GENERAL ASSISTANCE'
              groupItem={[
                {
                  desc:
                    'Emergency Assistance Paying Bills – Charity and Community Organizations. ',
                  link:
                    'https://freefinancialhelp.net/grandparents-raising-grandchildren-resources/'
                },
                {
                  desc: 'Finance. ',
                  link: [
                    'https://www.savingforcollege.com/grandparents/',
                    'https://www.youtube.com/watch?v=cMbdrdgCfgM'
                  ]
                },
                {
                  desc: 'GrandFacts.',
                  link:
                    'http://www.grandfamilies.org/Portals/0/State%20Fact%20Sheets/Grandfamilies-Fact-Sheet-Ohio.pdf'
                },
                {
                  desc: 'Mental Health.',
                  link: 'https://www.nami.org/'
                },
                {
                  desc: 'Housing Assistance.',
                  link: 'http://www.ahaco.org/'
                },
                {
                  desc: 'Grandparents College Savings.',
                  link: 'https://www.savingforcollege.com/grandparents/'
                }
              ]}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Resources;
