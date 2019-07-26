import React from 'react';

const SelectMember = props => {
    const { adalabMembers, handleChangeSelect } = props;
    return (
        <select name="members" id="adalab-members" onChange={handleChangeSelect}>
            <option value="selecciona">Selecciona una usuaria</option>
            {adalabMembers.map(user => (
                <option
                    key={user.id}
                    value={user.login}
                >
                    {user.login}
                </option>
            ))}
        </select>
    );
};

export default SelectMember;
