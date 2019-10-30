const ProgramCommitteeListing = (props) => (
  props.members.each((member, idx) => <ProgramCommitteeMember member={member} key={idx}/>)
)