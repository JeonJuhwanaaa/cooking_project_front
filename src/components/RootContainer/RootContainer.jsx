/** @jsxImportSource @emotion/react */
import * as s from "./style";

function RootContainer({children}) {
    return (
        <div css={s.layout}>
            {children}
        
        </div>
    );
}

export default RootContainer;