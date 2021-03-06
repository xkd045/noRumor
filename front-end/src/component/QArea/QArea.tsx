import React, {
  useState,
  useEffect,
  ChangeEvent,
  useRef,
  createRef,
} from 'react';
import INews from '@/types/INews';
import styles from './QArea.less';
import stylesCommon from '@/css/common.less';
import * as Utility from '@/Utility/utils';
interface HTMLInputEvent<HTMLInputElement> extends FocusEvent {
  target: HTMLInputElement & EventTarget;
}

export const QArea = (props: {}) => {
  const [Focus, setFocus] = useState(false);
  const [Text, setText] = useState('');
  const content = createRef<HTMLTextAreaElement>();
  const handleFocus = () => {
    setFocus(!Focus);
  };
  const handleTextChange = () => {
    setFocus(!Focus);
    if (content.current != null) setText(content.current.value);
  };
  return (
    <div style={{ width: '100%' }}>
      <textarea
        className={Utility.styleMerge([styles.QArea,stylesCommon.ccFlexRow])}
        placeholder={Focus ? '' : '点击输入问题'}
        onFocus={handleFocus}
        onChange={handleTextChange}
        onBlur={handleFocus}
        ref={content}
      />
      <div
        className={Utility.styleMerge([
          Text === '' ? styles.buttonDisabled : styles.buttonActive,
          stylesCommon.ccFlexRow,
        ])}
      >
        提交问题
      </div>
    </div>
  );
};
