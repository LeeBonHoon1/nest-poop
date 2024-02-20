import { IsString } from 'class-validator';
import { BaseModel } from 'src/common/entity/base.entity';
import { UsersModel } from 'src/users/entities/users.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity()
export class PostsModel extends BaseModel {
  // 1. UsersModel과 연동한다 Foreign Key를 이용해서
  // 2. null이 될 수 없다.
  // 유저는 여러개의 post를 작성 할 수 있다.
  // post table 관점에서는 여러개의 post(many)는 하나의(one) user를 바라 봄
  @ManyToOne(() => UsersModel, (user) => user.posts, {
    nullable: false,
  })
  author: UsersModel;

  @Column()
  @IsString({
    message: 'title는 string 타입을 입력 해줘야 합니다.',
  })
  title: string;

  @Column()
  @IsString({
    message: 'content는 string 타입을 입력 해줘야 합니다.',
  })
  content: string;

  @Column()
  likeCount: number;

  @Column()
  commentCount: number;
}
