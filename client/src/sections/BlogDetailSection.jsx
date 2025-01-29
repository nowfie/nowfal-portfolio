import { MdOutlineDateRange } from 'react-icons/md'
import PrimaryScroll from '../animations/PrimaryScroll'
import PropTypes from 'prop-types'

const BlogDetailSection = ({ data }) => {
  
  return (
    <div className="space-y-6">
      <PrimaryScroll className="date flex">
        <h3 className="text-base capitalize !font-heading flex items-center gap-3">
          <MdOutlineDateRange className="text-primary text-lg relative" />
          may 11, 2024
        </h3>
      </PrimaryScroll>
      <div className="description">
        <ul className="space-y-8">
          {data && (
            data.content.map((item, index) => (
              <div key={index}>
                <PrimaryScroll>
                  <li className="text-paragraph leading-relaxed capitalize">{item}</li>
                </PrimaryScroll>
                {index === 2 && (
                  <PrimaryScroll className="message pl-5 !my-12 italic text-paragraph border-l-[7px] border-primary">
                    <p>{data.message}</p>
                  </PrimaryScroll>
                )}
              </div>
            ))
          )}
        </ul>
      </div>

      <div className="space-y-3">
        <PrimaryScroll>
          <h1 className="text-heading !font-heading uppercase text-2xl">Conclusion</h1>
        </PrimaryScroll>
        <PrimaryScroll>
          <p className="text-paragraph leading-relaxed capitalize">{data.conclusion}</p>
        </PrimaryScroll>
      </div>
    </div>
  );
};

BlogDetailSection.propTypes = {
  data: PropTypes.object.isRequired,
};

export default BlogDetailSection