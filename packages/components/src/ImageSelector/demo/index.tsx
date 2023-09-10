import React, { useState } from 'react'
import { Space, ImageSelector } from '@dance-ui/ui'

export default () => {
  const [selectedImages, setSelectedImages] = useState<string[]>([])

  const upload = (file: File) => {
    console.log(`uploadingImg`, file)
    return 'https://fakeimg.pl/350x200/?text=MockUploadBackUrl'
  }
  const handleImagesSelected = (urls: string[]) => {
    console.log(`handleImagesSelected`, urls)
    setSelectedImages(urls)
  }

  const handleFileError = (file: File) => {
    console.error(`File upload error: ${file.name}`)
  }

  const renderAddButton = ({ triggerFileInput }: { triggerFileInput: () => void }) => (
    <div onClick={triggerFileInput} style={{ backgroundColor: 'lightblue', padding: '10px', borderRadius: '5px' }}>
      Custom Add Button
    </div>
  )

  const renderCloseIcon = ({ handleRemoveImage, index }: { index: number; handleRemoveImage: (index: number) => void }) => (
    <div
      onClick={() => handleRemoveImage(index)}
      className="flex items-center justify-center"
      style={{
        position: 'absolute',
        backgroundColor: 'red',
        color: 'white',
        top: '-12px',
        right: '-12px',
        borderRadius: '100%',
        width: '24px',
        height: '24px',
      }}>
      x
    </div>
  )
  return (
    <Space direction="vertical">
      <Space direction="vertical">
        <p>基础使用</p>
        <ImageSelector upload={upload} images={selectedImages} onChange={handleImagesSelected} />
      </Space>
      <Space direction="vertical">
        <p>default不可修改的主图</p>
        <ImageSelector
          upload={upload}
          images={selectedImages}
          onChange={handleImagesSelected}
          defaultImages={['https://fakeimg.pl/350x200/?text=Hello']}
        />
      </Space>
      <Space direction="vertical">
        <p>自定义添加按钮和关闭图标</p>
        <ImageSelector
          upload={upload}
          images={selectedImages}
          onChange={handleImagesSelected}
          onError={handleFileError}
          renderAddButton={renderAddButton}
          renderCloseIcon={renderCloseIcon}
          defaultImages={['https://fakeimg.pl/350x200/?text=Test1', 'https://fakeimg.pl/350x200/?text=Test2']}
        />
      </Space>
    </Space>
  )
}
