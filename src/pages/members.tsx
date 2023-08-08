import React from 'react';
import Layout from '@theme/Layout';
import members from '../data/members.data';
import TeamMemberProfileCard from '../components/TeamMemberProfileCard';

function MemberList() {
  return (
    <div className="row">
      {members.map(member => {
        return (
        <TeamMemberProfileCard
          key={member.Url+member.name}
          className={'col col--3 margin-bottom--md'}
          name={member.name}
          avatar={member.avatar}
          children={member.description}
          Url={member.Url}
          blogUrl={member.blogUrl}
        />);
      })}
    </div>
  );
}

// https://github.com/huynhicode/docusaurus/blob/d769b15f3ed72596cedcd1e2c96ab1d5a835a45b/website/src/pages/showcase/index.tsx
function MembersWall() {
  return (
    <Layout title="使用示例"  description='List of websites using torchpipe'>
      <main>
        <div className="text--center margin-top--lg margin-bottom--lg">
          <h1>Torchpipe Examples Showcase</h1>
          <p>List of examples using torchpipe</p>
          <p>
            <a
              className={'button button--lg button--primary'}
              href={"https://github.com/seven-innovation-base/official-website/edit/main/src/data/members.data.ts"}
              target={'_blank'}>
               🙏 Please add your site
              </a>
          </p>
        </div>
        <div className="container">
          <MemberList />
        </div>
      </main>
    </Layout>
  );
}

export default MembersWall;
