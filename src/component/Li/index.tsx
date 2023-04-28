interface Props {
    item: string;
    mark: boolean;
    bold: boolean;
    capitalizee: boolean;
}

export const Li = ({ item, mark, bold, capitalizee }: Props) => {
    return (
        <div className={"transition-all" + `${mark ? "pl-1" : 'pl-0'}  ` + `${bold ? 'font-bold' : 'font-normal'}`} >
            {
                mark ? (
                    <li className={'transition-all ' + `${capitalizee && "capitalize"}`}>
                        {item}
                        <br />
                    </li>
                ) :
                    (
                        <span className={'transition-all ' + `${capitalizee && "capitalize"}`}>
                            {item}
                            <br />
                        </span>
                    )
            }

        </div>
    )


}