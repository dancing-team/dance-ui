import { ChangeEvent, Ref, forwardRef, useCallback, useImperativeHandle, useRef } from 'react'
import { twMerge } from 'tailwind-merge'
import Icon, { IconType } from '../Icon'

export type ImageSelectorProps = {
  name?: string
  className?: string
  itemClass?: string
  defaultImages?: string[]
  maxSize?: number
  images: string[]
  onChange: (images: string[]) => void
  upload: (file: File) => Promise<string | null> // 上传函数，成功返回图片url，失败返回false
  onError?: (file: File) => void
  addButtonClass?: string
  renderAddButton?: ({ triggerFileInput }: { triggerFileInput: () => void }) => JSX.Element
  closeIconClass?: string
  renderCloseIcon?: ({ handleRemoveImage, index }: { index: number; handleRemoveImage: (index: number) => void }) => JSX.Element
}
const MAX_IMAGE_SIZE = 3 * 1024 * 1024 // 3M in bytes
const ImageSelector = forwardRef(
  (
    {
      name,
      className,
      itemClass,
      defaultImages,
      images,
      onChange,
      maxSize = MAX_IMAGE_SIZE,
      upload,
      onError,

      addButtonClass,
      renderAddButton,
      closeIconClass,
      renderCloseIcon,
    }: ImageSelectorProps,
    ref: Ref<HTMLInputElement>,
  ) => {
    const fileInputRef = useRef<HTMLInputElement>(null)
    const handleImageChange = useCallback(
      async (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
          const filesArray = Array.from(e.target.files).filter((file) => {
            if (file.size > maxSize) {
              onError?.(file)
              return false
            }
            return true
          })
          try {
            const res = await Promise.all(filesArray.map(upload))
            const urls = res.filter((url) => {
              if (url) return true
              return false
            })
            onChange([...images, ...urls])
          } catch (e) {
            console.log(e)
          }
        }
      },
      [images, maxSize, onChange, onError, upload],
    )

    const handleRemoveImage = (index: number) => {
      const updatedImages = [...images]
      updatedImages.splice(index, 1)
      onChange(updatedImages)
    }
    // 使用useImperativeHandle来同步内部ref和外部ref
    useImperativeHandle(ref, () => fileInputRef.current)

    const triggerFileInput = () => {
      fileInputRef.current?.click()
    }

    return (
      <div className={twMerge('flex flex-wrap items-center gap-3', className)}>
        {defaultImages?.length
          ? defaultImages.map((url) => (
              <div key={url} className={twMerge('relative h-32 w-32 rounded-lg bg-black/20 dark:bg-white/20', itemClass)}>
                <img src={url} alt={url} className="h-full w-full rounded-lg object-cover" />
              </div>
            ))
          : null}
        {images.map((url, index) => (
          <div key={index} className={twMerge('relative h-32 w-32 rounded-lg bg-black/20 dark:bg-white/20', itemClass)}>
            <img src={url} alt={url} className="h-full w-full rounded-lg object-cover" />
            {renderCloseIcon ? (
              renderCloseIcon({ handleRemoveImage, index })
            ) : (
              <Icon
                onClick={() => {
                  handleRemoveImage(index)
                }}
                type={IconType.CLOSE}
                className={twMerge('absolute -right-3 -top-3 h-6 w-6 cursor-pointer fill-red-500', closeIconClass)}
              />
            )}
          </div>
        ))}
        <input
          type="file"
          name={name}
          ref={fileInputRef}
          multiple
          onChange={(e) => {
            void handleImageChange(e)
          }}
          className="hidden"
        />
        {renderAddButton ? (
          renderAddButton({ triggerFileInput })
        ) : (
          <div
            className={twMerge(
              'flex h-20 w-28 cursor-pointer items-center justify-center rounded-lg bg-black/10 text-xl font-bold dark:bg-white/20',
              addButtonClass,
            )}
            onClick={triggerFileInput}>
            +
          </div>
        )}
      </div>
    )
  },
)
ImageSelector.displayName = 'ImageSelector'
ImageSelector.defaultProps = {
  maxSize: MAX_IMAGE_SIZE,
}

export default ImageSelector
