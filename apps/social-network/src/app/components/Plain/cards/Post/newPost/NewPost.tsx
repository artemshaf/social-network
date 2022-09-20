import cn from 'classnames';
import { FC, ReactNode, useRef, useState } from 'react';
import { INewPostIntreface } from './NewPost.intreface';
import { Card } from '@client/components/Plain/cards/';
import { Button, Icon, Input } from '@client/components';
import './NewPost.scss';
import { SubmitHandler, Controller, useForm } from 'react-hook-form';
import { selectUserId, useAppSelector } from '@client/store';
import { joiResolver } from '@hookform/resolvers/joi';
import { postSchema } from './resolver/resolver';
import mime from 'mime';

export interface IInputs {
  user: string;
  text?: string;
  files?: FileList;
}

export const NewPost = ({ className, ...props }: INewPostIntreface) => {
  const userId = useAppSelector(selectUserId);
  const filePicker = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<ReactNode[]>([]);
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    trigger,
    control,
    formState: { errors, touchedFields },
  } = useForm<IInputs>({
    resolver: joiResolver(postSchema),
    defaultValues: {
      user: userId,
    },
  });

  const onSubmit: SubmitHandler<IInputs> = async (data: IInputs) => {
    const formData = new FormData();
    console.log(formData);

    // const res = await fetch('http://localhost:5000/upload-file', {
    //   method: 'POST',
    //   body: formData,
    // }).then((res) => res.json());
    // alert(JSON.stringify(`${res.message}, status: ${res.status}`));
  };

  const filesLayout = (files: FileList): ReactNode[] => {
    const layout: ReactNode[] = [];
    for (let index = 0; index < files.length; index++) {
      const file = files?.item(index) as File;
      layout.push(
        <li className="new-post__files" key={file.name + file.type + file.size}>
          <Icon icon="document" />
          <div>
            <p>{mime.getExtension(file.type)}</p>
            <p>{file.name}</p>
          </div>
        </li>
      );
    }
    return layout;
  };

  const handleClick = () => {
    const res = filePicker.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue('files', e.target.files as FileList);
    setFiles(filesLayout(getValues('files') as FileList));
  };

  return (
    <Card
      tag="form"
      wrapper
      {...props}
      className={cn(className, 'new-post')}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <h4 className={cn('new-post__title')}>New post</h4>
        <Controller
          control={control}
          name="files"
          render={({ field }) => (
            <input
              className="hidden"
              type={'file'}
              multiple
              ref={filePicker}
              onChange={handleFileChange}
            />
          )}
        />
        <div className="new-post__icons">
          <Icon icon="document" onClick={(e) => handleClick()} />
          <Icon icon="video" />
          <Icon icon="camera" />
        </div>
      </div>
      <textarea
        className="new-post__textarea"
        placeholder="Write your post here..."
        {...register('text')}
      />
      {files.length ? <ul>{files.map((item) => item)}</ul> : <></>}
      <Button>Отправить</Button>
    </Card>
  );
};
