import React, { useEffect, useState } from 'react';
import Container from '../ui/Container';
import Header from '../components/Header';
import IssueItem from '../components/IssuseItem';
// import IssueService from '../utils/Issue.Service';

// export default function IssuesPage() {
//   const [issueList, setIssueList] = useState([]);

//   const [target, setTarget] = useState('');
//   const [isLoding, setIsLoading] = useState(false);
// const pageOffset = useRef(1);

// const onIntersect = async ([entry], observer) => {
//   if (entry.isIntersecting && !isLoding) {
//     observer.unobserve(entry.target);
//     setIsLoading(true);
//     await IssueService.getIssueList(pageOffset.current).then(({ data }) => {
//       setIssueList((prev) => [...prev, ...data]);
//       pageOffset.current += 10;
//     });
//     setIsLoading(false);
//     observer.observe(entry.target);
//   }
// };

// useEffect(() => {
//   let observer;
//   if (target) {
//     observer = new IntersectionObserver(onIntersect, {
//       threshold: 0.4
//     });
//     observer.observe(target);
//   }
//   return () => observer && observer.disconnect();
// }, [target]);

//   useEffect(() => {
//     IssueService.getIssueList(pageOffset.current).then(({ data }) => {
//       setIssueList(data);
//       pageOffset.current += 10;
//     });
//   }, []);

import useGetissues from '../utils/hooks/useGetIssues';

export default function IssuesPage() {
  const state = useGetissues();
  console.log(state);

  // eslint-disable-next-line no-unused-vars
  const [target, setTarget] = useState('');
  const [isLoding, setIsLoading] = useState(false);
  // const pageOffset = useRef(1);

  const onIntersect = async ([entry], observer) => {
    if (entry.isIntersecting && !isLoding) {
      observer.unobserve(entry.target);
      setIsLoading(true);
      // await IssueService.getIssueList(pageOffset.current).then(({ data }) => {
      //   setIssueList((prev) => [...prev, ...data]);
      //   pageOffset.current += 10;
      // });
      setIsLoading(false);
      observer.observe(entry.target);
    }
  };

  useEffect(() => {
    let observer;
    if (target) {
      observer = new IntersectionObserver(onIntersect, {
        threshold: 0.4
      });
      observer.observe(target);
    }
    return () => observer && observer.disconnect();
  }, [target]);

  if (!state.data) {
    return <></>;
  }

  return (
    <Container>
      <Header />
      <div>
        {state.data?.map((oneIssue) => (
          <IssueItem key={oneIssue.id} oneIssue={oneIssue} />
        ))}
      </div>
      {/* ref해야합니다 */}
      <div>불러오는 중입니다</div>
    </Container>
  );
}
