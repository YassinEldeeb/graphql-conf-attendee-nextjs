import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function Home({ domain }: any) {
  const router = useRouter()

  const { fullName, jobTitle, company } = router.query
  const searchParam = router.asPath.startsWith('/')
    ? router.asPath.slice(1)
    : router.asPath

  const SEOTitle = `${fullName} is attending GraphQL Conf 2023 in San Francisco Bay Area, CA`
  const SEODescription =
    'GraphQLConf 2023 hosted by the GraphQL Foundation. September 19-21, 2023. San Francisco Bay Area, California'
  const SEOImageURL = `https://og-image.the-guild.dev/conf${searchParam}`

  const [isTicketLoaded, setIsTicketLoaded] = useState(false)

  const tweetText = `I'm joining #GraphQLConf 2023, see you there!

Look at my cool ticket!
${domain}${router.asPath}`

  useEffect(() => {
    const img = new Image()
    img.src = SEOImageURL
    if (img.complete) {
      setIsTicketLoaded(true)
    }
  }, [])

  return (
    <main className='bg-[#171e26] min-h-screen flex flex-col overflow-x-hidden'>
      <Head>
        <meta
          name='keywords'
          content={`GraphQL, GraphQLConf, GraphQLConf 2023 —— ${fullName}, ${jobTitle}, ${company}, attending!`}
        />
        <meta
          property='og:url'
          content={`https://graphql.org/${searchParam}`}
        />
        <title>{SEOTitle}</title>
        <meta name='description' content={SEODescription} />
        <meta property='og:title' content={SEOTitle} />
        <meta property='og:description' content={SEODescription} />
        <meta property='og:image' content={SEOImageURL} />
        <meta property='og:image:alt' content={SEODescription} />
        <meta name='twitter:site' content='@graphql' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content={SEOTitle} />
        <meta name='twitter:description' content={SEODescription} />
        <meta name='twitter:image' content={SEOImageURL} />
      </Head>

      <div className='lg:px-16 px-6 py-5 border-solid border-b-[#343a46] border-b-[1px] flex justify-between items-center'>
        <a
          href='https://graphql.org/conf'
          className='font-medium hover:underline flex items-center lg:gap-2 gap-1'
        >
          <svg
            className='lg:w-9 lg:h-9 w-7 h-7'
            version='1.1'
            id='GraphQL_Logo'
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
            x='0px'
            y='0px'
            viewBox='0 0 400 400'
            enableBackground='new 0 0 400 400'
            xmlSpace='preserve'
          >
            <g>
              <g>
                <g>
                  <rect
                    x='122'
                    y='-0.4'
                    transform='matrix(-0.866 -0.5 0.5 -0.866 163.3196 363.3136)'
                    fill='#E535AB'
                    width='16.6'
                    height='320.3'
                  />
                </g>
              </g>
              <g>
                <g>
                  <rect
                    x='39.8'
                    y='272.2'
                    fill='#E535AB'
                    width='320.3'
                    height='16.6'
                  />
                </g>
              </g>
              <g>
                <g>
                  <rect
                    x='37.9'
                    y='312.2'
                    transform='matrix(-0.866 -0.5 0.5 -0.866 83.0693 663.3409)'
                    fill='#E535AB'
                    width='185'
                    height='16.6'
                  />
                </g>
              </g>
              <g>
                <g>
                  <rect
                    x='177.1'
                    y='71.1'
                    transform='matrix(-0.866 -0.5 0.5 -0.866 463.3409 283.0693)'
                    fill='#E535AB'
                    width='185'
                    height='16.6'
                  />
                </g>
              </g>
              <g>
                <g>
                  <rect
                    x='122.1'
                    y='-13'
                    transform='matrix(-0.5 -0.866 0.866 -0.5 126.7903 232.1221)'
                    fill='#E535AB'
                    width='16.6'
                    height='185'
                  />
                </g>
              </g>
              <g>
                <g>
                  <rect
                    x='109.6'
                    y='151.6'
                    transform='matrix(-0.5 -0.866 0.866 -0.5 266.0828 473.3766)'
                    fill='#E535AB'
                    width='320.3'
                    height='16.6'
                  />
                </g>
              </g>
              <g>
                <g>
                  <rect
                    x='52.5'
                    y='107.5'
                    fill='#E535AB'
                    width='16.6'
                    height='185'
                  />
                </g>
              </g>
              <g>
                <g>
                  <rect
                    x='330.9'
                    y='107.5'
                    fill='#E535AB'
                    width='16.6'
                    height='185'
                  />
                </g>
              </g>
              <g>
                <g>
                  <rect
                    x='262.4'
                    y='240.1'
                    transform='matrix(-0.5 -0.866 0.866 -0.5 126.7953 714.2875)'
                    fill='#E535AB'
                    width='14.5'
                    height='160.9'
                  />
                </g>
              </g>
              <path
                fill='#E535AB'
                d='M369.5,297.9c-9.6,16.7-31,22.4-47.7,12.8c-16.7-9.6-22.4-31-12.8-47.7c9.6-16.7,31-22.4,47.7-12.8   C373.5,259.9,379.2,281.2,369.5,297.9'
              />
              <path
                fill='#E535AB'
                d='M90.9,137c-9.6,16.7-31,22.4-47.7,12.8c-16.7-9.6-22.4-31-12.8-47.7c9.6-16.7,31-22.4,47.7-12.8   C94.8,99,100.5,120.3,90.9,137'
              />
              <path
                fill='#E535AB'
                d='M30.5,297.9c-9.6-16.7-3.9-38,12.8-47.7c16.7-9.6,38-3.9,47.7,12.8c9.6,16.7,3.9,38-12.8,47.7   C61.4,320.3,40.1,314.6,30.5,297.9'
              />
              <path
                fill='#E535AB'
                d='M309.1,137c-9.6-16.7-3.9-38,12.8-47.7c16.7-9.6,38-3.9,47.7,12.8c9.6,16.7,3.9,38-12.8,47.7   C340.1,159.4,318.7,153.7,309.1,137'
              />
              <path
                fill='#E535AB'
                d='M200,395.8c-19.3,0-34.9-15.6-34.9-34.9c0-19.3,15.6-34.9,34.9-34.9c19.3,0,34.9,15.6,34.9,34.9   C234.9,380.1,219.3,395.8,200,395.8'
              />
              <path
                fill='#E535AB'
                d='M200,74c-19.3,0-34.9-15.6-34.9-34.9c0-19.3,15.6-34.9,34.9-34.9c19.3,0,34.9,15.6,34.9,34.9   C234.9,58.4,219.3,74,200,74'
              />
            </g>
          </svg>
          <span className='lg:text-base text-sm'>GraphQL Conf 2023</span>
        </a>
        <div className='text-[#bcc1cd] font-medium text-sm flex lg:gap-6 gap-3'>
          <a
            className='hover:underline'
            href='https://graphql.org/conf/speakers/'
          >
            Speakers
          </a>
          <a
            className='hover:underline'
            href='https://graphql.org/conf/schedule/'
          >
            Schedule
          </a>
        </div>
      </div>

      <div className='h-full flex lg:px-[10%] px-6 items-center flex-1 lg:justify-between gap-20 lg:flex-row flex-col py-10 lg:py-0'>
        <div className='lg:mb-9 mb-0'>
          <h1 className='lg:text-5xl text-2xl font-bold'>
            {fullName}'s Ticket
          </h1>
          <div className='lg:text-xl text-base lg:pt-[24px] pt-[12px] lg:pb-[45px] pb-[30px]'>
            Join me <span className='font-medium'>September 19-21, 2023</span>{' '}
            in <span className='font-medium'>San Franciscoyar , CA</span>
          </div>
          <div className=''>
            <a
              href='https://cvent.me/4zbxz9'
              className='px-6 py-3.5 bg-[#f6009b] rounded-md w-max font-medium '
            >
              Join me at GraphQL Conf!
            </a>

            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                tweetText
              )}`}
              target='_blank'
              className='relative box-border lg:ml-4 lg:mt-0 mt-4 cursor-pointer px-5 py-3.5 rounded-md w-max font-medium'
            >
              Share on Twitter!
              <span className='absolute inset-0 border-2 rounded-md'></span>
            </a>
          </div>
        </div>

        <div
          className='ticket lg:max-w-[45%] max-w-[100%] transition ease-in-out'
          style={{
            opacity: isTicketLoaded ? 1 : 0,
          }}
        >
          <div className='left'></div>
          <div className='right'></div>
          <div className='ticket-content-wrapper'>
            <img
              onLoad={() => setIsTicketLoaded(true)}
              src={SEOImageURL}
              className='rounded-[15px]'
            ></img>
          </div>
        </div>
      </div>
    </main>
  )
}

export const getServerSideProps: GetServerSideProps<{}> = async (context) => {
  const req = context.req
  const protocol = req.headers['x-forwarded-proto'] || 'http'
  const host = req.headers['x-forwarded-host'] || req.headers['host']
  const domain = `${protocol}://${host}`

  return {
    props: { domain }, // passing the domain to the component
  }
}
