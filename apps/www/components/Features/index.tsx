import Solutions from 'data/Solutions.json'
import Image from 'next/image'
import SectionContainer from '../Layouts/SectionContainer'
import { motion } from 'framer-motion'
import BackedBy from '../BackedBy'
import { useBreakpoint, useTheme } from 'common'
import FeatureCard from './FeatureCard'

const opacityVariant = {
  default: { opacity: 1, filter: 'grayscale(1)', transition: { duration: 0.1 } },
  hover: {
    opacity: 1,
    filter: 'grayscale(0)',
    transition: { duration: 0.15 },
  },
}

const Features = () => {
  const isSm = useBreakpoint(640)
  const { isDarkMode } = useTheme()

  return (
    <SectionContainer className="space-y-8 max-w-7xl mt-24 lg:mt-0 !pt-0">
      <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-4 lg:gap-6 md:grid-cols-6">
        <FeatureCard
          url={Solutions['database'].url}
          title={Solutions['database'].name}
          subtitle={
            <>
              Every project is a full Postgres database,
              <br className="inline-block sm:hidden lg:inline-block" /> the world's most trusted
              relational database.
            </>
          }
          image={
            <motion.div className="absolute inset-0 z-0" variants={opacityVariant}>
              <Image
                src={
                  isDarkMode
                    ? '/images/index/database-dark-hover.jpg'
                    : '/images/index/database-light-hover.jpg'
                }
                alt="Supabase Postgres Database, hover image with glow"
                layout="fill"
                objectPosition={isSm ? 'bottom' : '50% 50%'}
                objectFit={isSm ? 'contain' : 'cover'}
                quality={100}
              />
            </motion.div>
          }
          classname="col-span-full md:col-span-3"
        />
        <FeatureCard
          url={Solutions['authentication'].url}
          title={Solutions['authentication'].name}
          subtitle={
            <>
              Add user sign ups and logins,
              <br className="inline-block sm:hidden lg:inline-block" /> securing your data with Row
              Level Security.
            </>
          }
          image={
            <motion.div className="absolute inset-0 z-0" variants={opacityVariant}>
              <Image
                src={
                  isDarkMode
                    ? '/images/index/auth-dark-hover.jpg'
                    : '/images/index/auth-light-hover.jpg'
                }
                alt="Supabase Authentication feature, hover image with glow"
                layout="fill"
                objectPosition="50% 50%"
                objectFit="cover"
              />
            </motion.div>
          }
          classname="md:col-span-3 lg:!col-span-2"
        />
        <FeatureCard
          url={Solutions['storage'].url}
          title={Solutions['storage'].name}
          subtitle={
            <>
              Store, organize, and serve large files,
              <br className="inline-block sm:hidden lg:inline-block" /> from videos to images.
            </>
          }
          image={
            <motion.div className="absolute inset-0 z-0" variants={opacityVariant}>
              <Image
                src={
                  isDarkMode
                    ? '/images/index/storage-dark-hover.jpg'
                    : '/images/index/storage-light-hover.jpg'
                }
                alt="Supabase Storage feature, hover image with glow"
                layout="fill"
                objectPosition="50% 50%"
                objectFit="cover"
                quality={95}
              />
            </motion.div>
          }
          classname="md:!col-span-2 md:h-[390px]"
        />
        <FeatureCard
          url={Solutions['edge-functions'].url}
          title={Solutions['edge-functions'].name}
          subtitle={
            <>
              Easily write custom code
              <br className="inline-block sm:hidden lg:inline-block" /> without deploying or scaling
              servers.
            </>
          }
          image={
            <motion.div className="absolute inset-0 z-0" variants={opacityVariant}>
              <Image
                src={
                  isDarkMode
                    ? '/images/index/edge-dark-hover.jpg'
                    : '/images/index/edge-light-hover.jpg'
                }
                alt="Supabase Edge Functions feature, hover image with glow"
                layout="fill"
                objectPosition={isSm ? 'bottom' : '50% 50%'}
                objectFit={isSm ? 'contain' : 'cover'}
                quality={90}
              />
            </motion.div>
          }
          classname="md:!col-span-2 md:h-[390px]"
        />
        <FeatureCard
          url={Solutions['realtime'].url}
          title={Solutions['realtime'].name}
          subtitle={
            <>
              Build multiplayer experiences
              <br className="inline-block sm:hidden lg:inline-block" /> with realtime data
              synchronization.
            </>
          }
          image={
            <motion.div className="absolute inset-0 z-0" variants={opacityVariant}>
              <Image
                src={
                  isDarkMode
                    ? '/images/index/realtime-dark-hover.jpg'
                    : '/images/index/realtime-light-hover.jpg'
                }
                alt="Supabase Edge Functions feature, hover image with glow"
                layout="fill"
                objectPosition={isSm ? 'bottom' : '50% 50%'}
                objectFit={isSm ? 'contain' : 'cover'}
                quality={95}
              />
            </motion.div>
          }
          classname="md:!col-span-2 md:h-[390px]"
        />
      </dl>
      <BackedBy className="pt-8" layout="horizontal" />
    </SectionContainer>
  )
}

export default Features
