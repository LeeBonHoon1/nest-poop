import { UsersModel } from 'src/users/entities/users.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PostsModel {
  @PrimaryGeneratedColumn()
  id: number;

  // 1. UsersModel과 연동한다 Foreign Key를 이용해서
  // 2. null이 될 수 없다.
  // 유저는 여러개의 post를 작성 할 수 있다.
  // post table 관점에서는 여러개의 post(many)는 하나의(one) user를 바라 봄
  @ManyToOne(() => UsersModel, (user) => user.posts, {
    nullable: false,
  })
  author: UsersModel;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  likeCount: number;

  @Column()
  commentCount: number;
}