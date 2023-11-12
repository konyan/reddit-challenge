/* eslint-disable react/prop-types */
import 'quill/dist/quill.snow.css'
import ReactQuill from 'react-quill'

const TextEditor = ({ callback, value }) => {
  const modules = {
    toolbar: [
      [{ size: ['small', false, 'large', 'huge'] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link'],
      [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }, { align: [] }],
      [
        {
          color: ['#000000', '#e60000', '#ff9900', '#ffff00', '#008a00', '#0066cc', 'custom-color'],
        },
      ],
    ],
  }

  const formats = [
    'header',
    'height',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'color',
    'bullet',
    'indent',
    'link',
    'align',
    'size',
  ]

  return (
    <div className="relative h-auto">
      <ReactQuill
        defaultValue={value}
        theme="snow"
        modules={modules}
        formats={formats}
        placeholder="What are your throught?.."
        onChange={callback}
        style={{ borderRadius: '12px', width: '100%' }}
      />
    </div>
  )
}

export default TextEditor
