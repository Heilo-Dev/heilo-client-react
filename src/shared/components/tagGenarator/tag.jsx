import React from 'react';
import { render } from 'react-dom';
// import { COUNTRIES } from './countries';
// import './style.css';
import { WithContext as ReactTags } from 'react-tag-input';


// const suggestions = COUNTRIES.map(country => {
//   return {
//     id: country,
//     text: country
//   };
// });

const KeyCodes = {
  space :32,
  comma: 188,
  enter: 13
};

const delimiters = [KeyCodes.comma, KeyCodes.enter,KeyCodes.space];
// ...............................................
const TagGenarate = ({label}) => {
    const [tags, setTags] = React.useState([
    { id: 'Bangla  ', text: 'Bangla' },
    { id: 'English', text: 'English' },
  
  ]);

  const handleDelete = i => {
    setTags(tags.filter((tag, index) => index !== i));
  };

  const handleAddition = tag => {
    setTags([...tags, tag]);
  };

  const handleDrag = (tag, currPos, newPos) => {
    const newTags = tags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    // re-render
    setTags(newTags);
  };

   const handleTagClick = index => {
    console.log('The tag at index ' + index + ' was clicked');
  };
    return (
        <div>
        <p className="  bg-primaryLight  inline p-1  font-bold text-white rounded-md text-center">{ label}</p>
         <div>
          <ReactTags  
            style={{
              color:"red",
            }}
          tags={tags}
          delimiters={delimiters}
          handleDelete={handleDelete}
          handleAddition={handleAddition}
          handleDrag={handleDrag}
          handleTagClick={handleTagClick}
          inputFieldPosition="top"
          autocomplete
        />
      </div> 
        </div>
    );
};

export default TagGenarate;