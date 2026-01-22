import { SkillsData } from '../data';

const Skills = () => {
    return (
        <>
            <div className="profileSection topMarginContainer">
                <div className="heading borderBottom dmSerifDisplay">SKILLS</div>
                <div className='dataContentDesc'>
                    <table>
                        <tbody>
                            {SkillsData.map((i, index) => (
                                <tr key={index}>
                                    <th>
                                        {i.title} <br />
                                    </th>
                                    <td style={{ paddingLeft: "15px" }}>
                                        {i.skill.map((s, idx) => (
                                            <span key={idx}>
                                                {s},
                                            </span>
                                        ))}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Skills