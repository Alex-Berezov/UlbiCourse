import { FC, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Input } from 'shared/ui/Input'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button'
import { ButtonTheme } from 'shared/ui/Button/Button'
import { useSelector } from 'react-redux'
import { getAddCommentFormText } from '../../model/selectors/AddCommentFormSelectors'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import {
  AddCommentFormActions,
  AddCommentFormReducer,
} from '../../model/slices/AddCommentForm'
import DynamicModuleLoader, {
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

import cls from './AddCommentForm.module.scss'

export interface AddCommentFormProps {
  className?: string
  onSendComment: (text: string) => void
}

const reducers: ReducersList = {
  addCommentForm: AddCommentFormReducer,
}

const AddCommentForm: FC<AddCommentFormProps> = ({
  className,
  onSendComment,
}) => {
  const { t } = useTranslation('article')
  const dispatch = useAppDispatch()
  const text = useSelector(getAddCommentFormText)

  const onCommentTextChange = useCallback(
    (value: string) => {
      dispatch(AddCommentFormActions.setTest(value))
    },
    [dispatch]
  )

  const onSendHandler = useCallback(() => {
    onSendComment(text || '')
    onCommentTextChange('')
  }, [onCommentTextChange, onSendComment, text])

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames(cls.AddCommentForm, {}, [className])}>
        <Input
          className={cls.input}
          placeholder={t('addCommet')}
          type="text"
          value={text}
          onChange={onCommentTextChange}
        />
        <Button theme={ButtonTheme.OUTLINED} onClick={onSendHandler}>
          {t('add')}
        </Button>
      </div>
    </DynamicModuleLoader>
  )
}

export default AddCommentForm
