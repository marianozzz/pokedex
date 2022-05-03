import React from "react";

const Pagination = (props) =>
{
    const {onLeftClick, onRightClick, page, totalPages} = props;
    return( <div>
            <nav aria-label="...">
                <ul className="pagination">
                    <li className="page-item"><button className="page-link" onClick={onLeftClick}>Anterior</button></li>
                    <li className="page-item"><button className="page-link active">{page}</button></li>
                    <li className="page-item"><button className="page-link">...</button></li>
                    <li className="page-item"><button className="page-link">{totalPages}</button></li>
                    <li className="page-item"><button className="page-link" onClick={onRightClick}>Siguiente</button></li>
                 </ul>
             </nav>
        </div>
    )
}
export default Pagination;