import React from 'react';
import styled from 'styled-components';

interface PreventLinkActionProps {
  children: React.ReactNode;
  onClickHandler?: () => void;
}

const PreventLinkAction = ({ children, onClickHandler }: PreventLinkActionProps) => {
  const preventLinking = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    onClickHandler?.();

    return;
  };
  return (
    <PreventEventPropagation onClickCapture={(e) => preventLinking(e)}>
      {children}
    </PreventEventPropagation>
  );
};

export default PreventLinkAction;

const PreventEventPropagation = styled.div`
  z-index: 100;
`;
