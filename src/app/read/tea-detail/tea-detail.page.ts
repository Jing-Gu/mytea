import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-tea-detail',
  templateUrl: './tea-detail.page.html',
  styleUrls: ['./tea-detail.page.scss'],
})
export class TeaDetailPage implements OnInit {

  teaDetail

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.teaDetail = history.state
    console.log(history.state)
  }

}
